import express from "express";
const router = express.Router();

import { schemas } from "../../models/dish.js";
import validateBody from "../../decorators/validateBody.js";

import dishesControllers from "../../controllers/dishes.js";

router.get("/", dishesControllers.getDishes);

router.post(
  "/",
  validateBody(schemas.getDishesByIdsschema),
  dishesControllers.getDishesByIds
);

export default router;
