import { Router } from "express";
import { ChefsController } from "../controllers/chefsController";
const router = Router();
router.get("/getChefs", ChefsController.getChefs);
router.post("/createChef", ChefsController.createChef);
export default router;