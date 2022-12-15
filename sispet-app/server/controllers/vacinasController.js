const Vacinas = require("../models/vacinasModel");
const mongoose = require("mongoose");

const getVacinas = async (req, res) => {
    //console.log(mongoose.isValidObjectId(req.params.id))
    try {
        const user_id = req.user._id
	    //const vacinas = await Vacinas.find().populate('cliente', 'nome');
        const vacinas = await Vacinas.find({ user_id });
	    res.json(vacinas);
    } catch (err) {
        console.error(err.message);
    }
};

const createVacina = async (req, res) => {
    try {
        //const vacina = req.body;
        const nome = req.body.nome
        const doses = req.body.doses
        const lote = req.body.lote
        const fabricante = req.body.fabricante
        const fornecedor = req.body.fornecedor
        const user_id = req.user._id
        //const newVacina = new Vacinas(vacina, user_id);
        const newVacina = new Vacinas({nome, doses, lote, fabricante, fornecedor, user_id});
        await newVacina.save();
        res.json(newVacina);
    } catch (err) {
        console.error(err.message);
    }
};

const deleteVacina = async (req, res) => {
    try {
        const deletedVacina = await Vacinas.findByIdAndDelete(req.params.id, req.params.nome);
        res.json(deletedVacina);
    } catch (err) {
        console.error(err.message);
    }
};

const updateVacina = async (req, res) => {
    const newVacina = req.body;
    const id = req.params.id;
    try {
        const updatedVacina = await Vacinas.findByIdAndUpdate(id, newVacina);
        updatedVacina.save();
        res.json(updatedVacina);
    } catch (err) {
        console.error(err.message);
    }
};

exports.getVacinas = getVacinas;
exports.createVacina = createVacina;
exports.deleteVacina = deleteVacina;
exports.updateVacina = updateVacina;