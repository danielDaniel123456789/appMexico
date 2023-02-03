import { config } from "dotenv";

config(); //pone a dispocion las variables de entorno que se escribieron  en el archivo  .ENV 

export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};

