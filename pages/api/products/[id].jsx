import data from "./data.json";

export const getProductById = (id) => {
  const product = data.filter((product) => product.id === Number(id))
  return product[0];
};

const handler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(getProductById(req.query.id));
  }
};

export default handler;
