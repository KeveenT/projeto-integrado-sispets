const Funcionarios = require("../models/funcionariosModel");

const getFuncionarios = async (req, res) => {
    try {
        const user_id = req.user._id
        const funcionarios = await Funcionarios.find({ user_id });
	    res.json(funcionarios);
    } catch (err) {
        console.error(err.message);
    }
};

const createFuncionario = async (req, res) => {
    try {
        const nome = req.body.nome
        const cpf = req.body.cpf
        const cargo = req.body.cargo
        const expediente = req.body.expediente
        const user_id = req.user._id
        const newFuncionario = new Funcionarios({nome, cpf, cargo, expediente, user_id});
        await newFuncionario.save();
        res.json(newFuncionario);
    } catch (err) {
        console.error(err.message);
    }
};

const deleteFuncionario = async (req, res) => {
    try {
        const deletedFuncionario = await Funcionarios.findByIdAndDelete(req.params.id, req.params.nome);
        res.json(deletedFuncionario);
    } catch (err) {
        console.error(err.message);
    }
};

const updateFuncionario = async (req, res) => {
    const newFuncionario = req.body;
    const id = req.params.id;
    try {
        const updatedFuncionario = await Funcionarios.findByIdAndUpdate(id, newFuncionario);
        updatedFuncionario.save();
        res.json(updatedFuncionario);
    } catch (err) {
        console.error(err.message);
    }
};

exports.getFuncionarios = getFuncionarios;
exports.createFuncionario = createFuncionario;
exports.deleteFuncionario = deleteFuncionario;
exports.updateFuncionario = updateFuncionario;