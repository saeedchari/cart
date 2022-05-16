import data from "./data.json";

export const getCategories = () => {
  return data;
};

const handler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(getCategories());
  }
};

export default handler;
