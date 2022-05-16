import { useRouter } from "next/router";
import Col from "../../components/UI/Col/Col";
import Container from "../../components/UI/Container/Container";
import Row from "../../components/UI/Row/Row";
import { getCategories } from "../api/category";
import { getColors } from "../api/colors";
import { getProducts } from "../api/products";
import { getSizes } from "../api/sizes";
import Filter from "./Filter/Filter";
import Products from "./Products/Products";

const Category = ({ category, colors, sizes, products }) => {
  console.log((1 - 1) * 6);

  const router = useRouter(),
    { query } = router;

  const url = query.category ? `/category/${query.category}` : "/category";

  const setQueryString = (query, notQuery) => {
    const result = {};

    Object.entries(query).map((item) => {
      if (!notQuery.includes(item[0])) {
        result[item[0]] = item[1];
      }
    });

    return result;
  };

  return (
    <section className="category">
      <Container>
        <Row>
          <Col xs={12} lg={3}>
            <Filter
              category={category}
              color={colors}
              size={sizes}
              url={url}
              setQueryString={setQueryString}
            />
          </Col>
          <Col xs={12} lg={9}>
            <Products
              products={products.data}
              count={products.count}
              url={url}
              setQueryString={setQueryString}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const getServerSideProps = async (ctx) => {
  const { category, color, size, page } = ctx.query;

  if (category && category.length > 1) {
    return { notFound: true };
  } else {
    const categories = await getCategories(),
      colors = await getColors(),
      sizes = await getSizes(),
      products = await getProducts(
        category ? category.join(" ") : "",
        color || "",
        size || "",
        page || 1
      );

    return { props: { category: categories, colors, sizes, products } };
  }
};

export default Category;
