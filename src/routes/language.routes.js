import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";

const router = Router();

router.get("/", languageController.get);
router.get("/:id", languageController.getID);
router.post("/", languageController.add);
router.put("/:id", languageController.update);
router.delete("/:id", languageController.deleteID);

export default router;


