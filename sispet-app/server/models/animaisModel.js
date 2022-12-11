const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Clientes = require("../models/clientesModel");

const animalSchema = new Schema({
    nome: {
        type: String,
        required: false,
    },
    especie: {
        type: String,
        required: false,
    },
    idade: {
        type: Number,
        required: false,
    },
    raça: {
        type: String,
        required: false,
    },
    sexo: {
        type: String,
        required: false,
    },
    cliente: {
        //type: mongoose.Schema.Types.String,
        //ref: "Clientes",
        type: String,
        required: false,
    },
    user_id: {
        type: String,
        required: true
    }
});

const animaisModel = mongoose.model("Animais", animalSchema);
module.exports = animaisModel;