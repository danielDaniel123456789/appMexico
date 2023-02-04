import express from "express";
import morgan from "morgan";
// Routes
import languageRoutes from "./routes/language.routes";
import usuarioRoutes from "./routes/usuario.routes";
import temasRoutes from "./routes/temas.routes";
import detalleTemasRoutes from "./routes/detalleTemas.routes";
const app = express();


//puertos que se pueden usar en este caso la variable que 
//esta en archivos env si no esta instanciada la ignora y usa el puerto 4000
const port = process.env.PORT || 4000;
// Settings
app.set("port", port);

// Middlewares
app.use(morgan("dev")); //muestras datos en la consola
app.use(express.json());

// Routes
app.use("/api/languages", languageRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/tema", temasRoutes);
app.use("/api/detalletema", detalleTemasRoutes);
export default app;



