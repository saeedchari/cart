import { useContext, useState } from "react";
import Button from "../../components/UI/Button/Button";
import Col from "../../components/UI/Col/Col";
import Container from "../../components/UI/Container/Container";
import Row from "../../components/UI/Row/Row";
import { CartContext } from "../../context/cartContext";
import { getProductById } from "../api/products/[id]";

const Product = ({ product }) => {
  const { id, image, name, price, colors, sizes } = product;

  const cartContext = useContext(CartContext);

  const [colorSize, setColorSize] = useState({
    color: colors[0],
    size: sizes[0],
  });

  const colorSizeHandler = (name, value) => {
    setColorSize({ ...colorSize, [name]: value });
  };

  return (
    <section className="detail-product">
      <Container>
        <div className="detail-product-wrapper">
          <Row>
            <Col xs={12} lg={4}>
              <div className="detail-product-image">
                <img src={image} alt={name} title={name} />
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <h2 className="detail-product-name">{name}</h2>
              <ul className="detail-product-colors d-flex align-items-center">
                {colors.map((item) => (
                  <li
                    key={item}
                    onClick={() => colorSizeHandler("color", item)}
                    className={colorSize.color === item ? "active" : ""}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="detail-product-sizes d-flex align-items-center">
                {sizes.map((item) => (
                  <li
                    key={item}
                    onClick={() => colorSizeHandler("size", item)}
                    className={colorSize.size === item ? "active" : ""}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="detail-product-price">
                {price}
                <span>تومان</span>
              </div>
              <Button
                onClick={() =>
                  cartContext.addItem(
                    id,
                    image,
                    name,
                    price,
                    colorSize.color,
                    colorSize.size
                  )
                }
              >
                افزودن به سبد خرید
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const product = await getProductById(id);

  return { props: { product } };
};

export default Product;
