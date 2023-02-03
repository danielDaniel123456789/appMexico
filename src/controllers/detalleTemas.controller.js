import { getConnection } from "./../database/database";

const get = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM detalletemas");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getID = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM detalletemas WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const add = async (req, res) => {
    try {
        const { espayol, ingles, idTema } = req.body;

        if (espayol === undefined || ingles === undefined || idTema=== undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const datos = { espayol, ingles, idTema };
        const connection = await getConnection();
        await connection.query("INSERT INTO detalleTemas SET ?", datos);
        res.json({ message: "Usuario agregado" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { espayol, ingles } = req.body;

        if (id === undefined || espayol === undefined || ingles === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const datos = { espayol, ingles };
        const connection = await getConnection();
        const result = await connection.query("UPDATE detalleTemas SET ? WHERE id = ?", [datos, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteID = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM detalleTemas WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    get,
    getID,
    add,
    update,
    deleteID
};







