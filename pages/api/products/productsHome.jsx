import data from "./data.json";

export const getProductsaHome = () => {
  return data.slice(0, 8);
};

const handler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(getProductsaHome());
  }
};

export default handler;
