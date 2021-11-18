const mongoose = require("mongoose");

const equipamentosModel = new mongoose.Schema({
    produto: { type: String, required: true },
    marca: { type: String, required: true },
    caracteristicas: { type: String, required: true } ,
    peso: { type: Number, required: true },
    volume: { type: Number },
    valor: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now },
});

const equipamentos = mongoose.model("equipamentos", equipamentosModel);

module.exports = equipamentos;
