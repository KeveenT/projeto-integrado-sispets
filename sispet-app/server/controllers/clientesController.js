const Clientes = require("../models/clientesModel");

const getClientes = async (req, res) => {
    try {
	    const clientes = await Clientes.find();
	    res.json(clientes);
    } catch (err) {
        console.error(err.message);
    }
};

const createCliente = async (req, res) => {
    try {
        const cliente = req.body;
        const newCliente = new Clientes(cliente);
        await newCliente.save();
        res.json(cliente);
    } catch (err) {
        console.error(err.message);
    }
};

const deleteCliente = async (req, res) => {
    try {
        const deletedCliente = await Clientes.findByIdAndDelete(req.params.id, req.params.nome);
        res.json(deletedCliente);
    } catch (err) {
        console.error(err.message);
    }
};

const updateCliente = async (req, res) => {
    const newCliente = req.body;
    const id = req.params.id;
    try {
        const updatedCliente = await Clientes.findByIdAndUpdate(id, newCliente);
        updatedCliente.save();
        res.json(updatedCliente);
    } catch (err) {
        console.error(err.message);
    }
};

exports.getClientes = getClientes;
exports.createCliente = createCliente;
exports.deleteCliente = deleteCliente;
exports.updateCliente = updateCliente;