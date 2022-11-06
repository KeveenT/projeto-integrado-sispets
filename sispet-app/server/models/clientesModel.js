const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nome: {
        type: String,
        required: false,
    },
    cpf: {
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
    email: {
        type: String,
        required: false,
    }
});

const clientesModel = mongoose.model("Clientes", clienteSchema);
module.exports = clientesModel;