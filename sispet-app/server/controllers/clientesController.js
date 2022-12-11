const Clientes = require("../models/clientesModel");

const getClientes = async (req, res) => {
    try {
        const user_id = req.user._id
	    const clientes = await Clientes.find({ user_id });
	    res.json(clientes);
    } catch (err) {
        console.error(err.message);
    }
};

const createCliente = async (req, res) => {
    try {
        //const cliente = req.body;
        const nome = req.body.nome
        const cpf = req.body.cpf
        const cep = req.body.cep
        const endereço = req.body.endereço
        const telefone = req.body.telefone
        const email = req.body.email
        const user_id = req.user._id
        //const newCliente = new Clientes(cliente);
        const newCliente = new Clientes({nome, cpf, cep, endereço, telefone, email, user_id});
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