import { Router } from "express";
import { methods as detalleTemasController } from "../controllers/detalleTemas.controller";

const routerDetalleTemas = Router();

routerDetalleTemas.get("/", detalleTemasController.get);
routerDetalleTemas.get("/:id", detalleTemasController.getID);
routerDetalleTemas.post("/", detalleTemasController.add);
routerDetalleTemas.put("/:id", detalleTemasController.update);
routerDetalleTemas.delete("/:id", detalleTemasController.deleteID);

export default routerDetalleTemas;