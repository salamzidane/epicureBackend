import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantController";

const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.post("/createRestaurant", RestaurantsController.createRestaurant);
router.put("/updateRestaurant", RestaurantsController.updateRestaurant);

export default router;