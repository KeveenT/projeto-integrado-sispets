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
        type: Date,
        required: false,
    },
    fabricante: {
        type: String,
        required: false,
    },
    fornecedor: {
        type: String,
        required: false,
    }
});

const vacinasModel = mongoose.model("Vacinas", vacinaSchema);
module.exports = vacinasModel;