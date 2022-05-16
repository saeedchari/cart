import { number, string } from "prop-types";
import Link from "next/link";

const Product = ({ id, src, name, price }) => {
  return (
    <div className="product">
      <div className="product-image">
        <Link href={`/product/${id}`}>
          <a>
            <img src={src} alt={name} title={name} />
          </a>
        </Link>
      </div>
      <h2 className="product-name">
        <Link href={`/product/${id}`}>{name}</Link>
      </h2>
      <div className="product-price">
        {price}
        <span>تومان</span>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: number,
  src: string,
  name: string,
  price: number,
};

export default Product;
