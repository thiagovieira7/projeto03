const mongoose = require("mongoose");

const acessoriosModel = new mongoose.Schema({
    produto: { type: String, required: true },
    marca: { type: String, required: true },
    caracteristicas: { type: String, required: true } ,
    peso: { type: Number, required: true },
    volume: { type: Number },
    valor: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now },
});

const acessorios = mongoose.model("acessorios", acessoriosModel);

module.exports = acessorios;
