import data from "./data.json";

export const getColors = () => {
  return data;
};

const handler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(getColors());
  }
};

export default handler;
