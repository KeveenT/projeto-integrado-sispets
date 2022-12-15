const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
        required: false,
    },
    cargo: {
        type: String,
        required: false,
    },
    expediente: {
        type: Number,
        required: false,
    }
});

const funcionariosModel = mongoose.model("Funcionarios", funcionarioSchema);
module.exports = funcionariosModel;