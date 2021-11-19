const mongoose = require("mongoose");  //importando o mongoose

const calcadosModel = new mongoose.Schema({
    tipo: { type: String, required: true},
    genero: { type: String, required: true},
    marca: { type: String, required: true},
    tamanho: { type: Number, required: true},
    cor: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Calcado = mongoose.model("calcados",calcadosModel);

module.exports = Calcado;