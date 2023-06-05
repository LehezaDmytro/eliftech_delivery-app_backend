import { Schema, model } from "mongoose";
import { handleMongooseError } from "../helpers/index.js";

const schema = new Schema();
schema.post("save", handleMongooseError);

const Dish = model("dish", schema);

export default Dish;
