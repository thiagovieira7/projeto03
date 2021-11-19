const mongoose = require("mongoose");  //importando o mongoose

const roupasModel = new mongoose.Schema({
    tipo: { type: String, required: true},
    genero: { type: String, required: true},
    marca: { type: String, required: true},
    tamanho: { type: String, required: true},
    cor: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Roupa = mongoose.model("roupas",roupasModel);

module.exports = Roupa;