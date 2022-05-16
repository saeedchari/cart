import Skeleton from "react-loading-skeleton";
import Product from "../components/Product/Product";
import Col from "../components/UI/Col/Col";
import Container from "../components/UI/Container/Container";
import Row from "../components/UI/Row/Row";
import { getProductsaHome } from "./api/products/productsHome";

const index = ({ products }) => {
  return (
    <>
      <Container>
        <Row>
          {products && products.length > 0 ? (
            products.map(({ id, image, name, price }) => {
              return (
                <Col key={id} xs={12} sm={6} md={4} lg={3}>
                  <Product id={id} src={image} name={name} price={price} />
                </Col>
              );
            })
          ) : (
            <SkeletonIndex />
          )}
        </Row>
      </Container>
    </>
  );
};

export const SkeletonIndex = () => {
  const elements = [];

  for (let i = 0; i < 8; i++) {
    elements.push(
      <Col key={i} xs={12} sm={6} md={4} lg={3}>
        <Skeleton
          borderRadius={12}
          height={300}
          style={{ marginBottom: "10px" }}
        />
        <Skeleton
          borderRadius={5}
          height={20}
          width="60%"
          style={{ marginBottom: "10px" }}
        />
        <Skeleton
          borderRadius={5}
          height={20}
          width="25%"
          style={{ marginBottom: "10px" }}
        />
      </Col>
    );
  }

  return elements;
};

export const getServerSideProps = async () => {
  const products = await getProductsaHome();

  return { props: { products } };
};

export default index;
