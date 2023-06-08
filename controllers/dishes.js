import { Dish } from "../models/dish.js";
import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";

const getDishes = async (req, res) => {
  const { shop = "Mc Donald" } = req.query;
  const result = await Dish.find({ shop });

  if (result.length === 0) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const getDishesByIds = async (req, res) => {
  const ids = req.body;
  const result = await Dish.find({ _id: ids });

  if (result.length === 0) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

export default {
  getDishes: ctrlWrapper(getDishes),
  getDishesByIds: ctrlWrapper(getDishesByIds),
};
