const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fornecedorSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    cnpj: {
        type: Number,
        required: false,
    },
    cep: {
        type: Number,
        required: false,
    },
    endereço: {
        type: String,
        required: false,
    },
    telefone: {
        type: Number,
        required: false,
    },
    fornecimento: {
        type: String,
        required: false,
    },
    user_id: {
        type: String,
        required: false
    }
});

const fornecedoresModel = mongoose.model("Fornecedores", fornecedorSchema);
module.exports = fornecedoresModel;