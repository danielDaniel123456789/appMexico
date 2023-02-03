import { Router } from "express";
import { methods as temasController } from "../controllers/temas.controller";

const routerTemas = Router();

routerTemas.get("/", temasController.get);
routerTemas.get("/:id", temasController.getID);
routerTemas.post("/", temasController.add);
routerTemas.put("/:id", temasController.update);
routerTemas.delete("/:id", temasController.deleteID);

export default routerTemas;