import express from "express";
const router = express.Router();

import dishesControllers from "../../controllers/dishes.js";

router.get("/", dishesControllers.getDishes);

export default router;
