import data from "./data.json";

export const getProducts = (category, color, size, page) => {
  let result = data;
  const perPage = (page - 1) * 6;

  if (category) {
    result = result.filter((product) => product.category === category);
  }

  if (color) {
    result = result.filter((product) => product.colors.includes(color));
  }

  if (size) {
    result = result.filter((product) => product.sizes.includes(size));
  }

  return {
    data: result.slice(perPage, perPage + 6),
    count: result.length,
  };
};

const handler = (req, res) => {
  if (req.method === "GET") {
    const { category, color, size } = req.query;

    res.status(200).json(getProducts(category, color, size));
  }
};

export default handler;
