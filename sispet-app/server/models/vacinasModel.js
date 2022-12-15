const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vacinaSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    doses: {
        type: Number,
        required: false,
    },
    lote: {
        type: Number,
        required: false,
    },
    fabricante: {
        type: String,
        required: false,
    },
    fornecedor: {
        type: String,
        required: true,
    }
});

const vacinasModel = mongoose.model("Vacinas", vacinaSchema);
module.exports = vacinasModel;