const Animais = require("../models/animaisModel");
const mongoose = require("mongoose");

const getAnimais = async (req, res) => {
    //console.log(mongoose.isValidObjectId(req.params.id))
    try {
	    //const animais = await Animais.find().populate('cliente', 'nome');
        const animais = await Animais.find();
	    res.json(animais);
    } catch (err) {
        console.error(err.message);
    }
};

const createAnimal = async (req, res) => {
    try {
        const animal = req.body;
        const newAnimal = new Animais(animal);
        await newAnimal.save();
        res.json(animal);
    } catch (err) {
        console.error(err.message);
    }
};

const deleteAnimal = async (req, res) => {
    try {
        const deletedAnimal = await Animais.findByIdAndDelete(req.params.id, req.params.nome);
        res.json(deletedAnimal);
    } catch (err) {
        console.error(err.message);
    }
};

const updateAnimal = async (req, res) => {
    const newAnimal = req.body;
    const id = req.params.id;
    try {
        const updatedAnimal = await Animais.findByIdAndUpdate(id, newAnimal);
        updatedAnimal.save();
        res.json(updatedAnimal);
    } catch (err) {
        console.error(err.message);
    }
};

exports.getAnimais = getAnimais;
exports.createAnimal = createAnimal;
exports.deleteAnimal = deleteAnimal;
exports.updateAnimal = updateAnimal;