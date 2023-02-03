import { Router } from "express";
import { methods as usuarioController } from "./../controllers/usuarios.controller";

const routerUsuarios = Router();

routerUsuarios.get("/", usuarioController.get);
routerUsuarios.get("/:id", usuarioController.getID);
routerUsuarios.post("/", usuarioController.add);
routerUsuarios.put("/:id", usuarioController.update);
routerUsuarios.delete("/:id", usuarioController.deleteID);

export default routerUsuarios;