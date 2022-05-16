import data from "./data.json";

export const getSizes = () => {
  return data;
};

const handler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(getSizes());
  }
};

export default handler;
