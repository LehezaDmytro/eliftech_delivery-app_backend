import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleMongooseError } from "../helpers/index.js";

const schema = new Schema();

const getDishesByIdsschema = Joi.array().items(Joi.string());

const schemas = {
  getDishesByIdsschema,
};

schema.post("save", handleMongooseError);

const Dish = model("dish", schema);

export { Dish, schemas };
