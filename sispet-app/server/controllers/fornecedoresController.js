const Fornecedores = require("../models/fornecedoresModel");
const mongoose = require("mongoose");

const getFornecedores = async (req, res) => {
    try {
        const user_id = req.user._id
        const fornecedores = await Fornecedores.find({ user_id });
	    res.json(fornecedores);
    } catch (err) {
        console.error(err.message);
    }
};

const createFornecedor = async (req, res) => {
    try {
        const nome = req.body.nome
        const cnpj = req.body.cpf
        const cep = req.body.cep
        const endereço = req.body.endereço
        const telefone = req.body.telefone
        const fornecimento = req.body.email
        const user_id = req.user._id
        const newFornecedor = new Fornecedores({nome, cnpj, cep, endereço, telefone, fornecimento, user_id});
        await newFornecedor.save();
        res.json(fornecedor);
    } catch (err) {
        console.error(err.message);
    }
};

const deleteFornecedor = async (req, res) => {
    try {
        const deletedFornecedor = await Fornecedores.findByIdAndDelete(req.params.id, req.params.nome);
        res.json(deletedFornecedor);
    } catch (err) {
        console.error(err.message);
    }
};

const updateFornecedor = async (req, res) => {
    const newFornecedor = req.body;
    const id = req.params.id;
    try {
        const updatedFornecedor = await Fornecedores.findByIdAndUpdate(id, newFornecedor);
        updatedFornecedor.save();
        res.json(updatedFornecedor);
    } catch (err) {
        console.error(err.message);
    }
};

exports.getFornecedores = getFornecedores;
exports.createFornecedor = createFornecedor;
exports.deleteFornecedor = deleteFornecedor;
exports.updateFornecedor = updateFornecedor;