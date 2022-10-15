const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
        type: String,
        required: false,
    }
});

const animaisModel = mongoose.model("Animais", animalSchema);
module.exports = animaisModel;