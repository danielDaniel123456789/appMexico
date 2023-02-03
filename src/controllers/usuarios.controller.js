import { getConnection } from "./../database/database";

const get = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios");
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
        const result = await connection.query("SELECT * FROM usuarios WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const add = async (req, res) => {
    try {
        const { usuarioUnico, nombre } = req.body;

        if (usuarioUnico === undefined || nombre === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const datos = { usuarioUnico, nombre };
        const connection = await getConnection();
        await connection.query("INSERT INTO usuarios SET ?", datos);
        res.json({ message: "Usuario agregado" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuarioUnico, nombre } = req.body;

        if (id === undefined || usuarioUnico === undefined || nombre === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const datos = { usuarioUnico, nombre };
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE id = ?", [datos, id]);
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
        const result = await connection.query("DELETE FROM usuarios WHERE id = ?", id);
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







