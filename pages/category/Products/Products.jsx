import Row from "../../../components/UI/Row/Row";
import Col from "../../../components/UI/Col/Col";
import Product from "../../../components/Product/Product";
import { func, number, object, string } from "prop-types";
import Pagination from "../../../components/UI/Pagination/Pagination";
import { useRouter } from "next/router";
import Alert from "../../../components/UI/Alert/Alert";

const Products = ({ products, count, url, setQueryString }) => {
  const router = useRouter(),
    { query } = router;

  return (
    <>
      <Row>
        {products && products.length > 0 ? (
          products.map(({ id, image, name, price }) => {
            return (
              <Col key={id} xs={12} sm={6} md={4}>
                <Product id={id} src={image} name={name} price={price} />
              </Col>
            );
          })
        ) : (
          <Alert>محصولی یافت نشد.</Alert>
        )}
      </Row>
      {count > 6 && (
        <Pagination
          count={Math.ceil(count / 6)}
          link={url}
          query={setQueryString({ ...query }, ["category"])}
          activePage={query.page ? Number(query.page) : 1}
        />
      )}
    </>
  );
};

Products.propTypes = {
  products: object,
  count: number,
  url: string,
  setQueryString: func,
};

export default Products;
