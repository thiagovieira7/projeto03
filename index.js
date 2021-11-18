const express = require("express");  //chamando o express
const app = express();  //definindo o app como express
require('dotenv').config(); // config do .env para acessar as VARs de ambiente
const cors = require("cors");  // importando o CORS para nosso APP
app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./model/conn/index"); //importando a conexao

Conn(); //executa a func de conexao

app.use(cors()); // usando o CORS no APP
app.options("*", cors()); // Configurando o CORS para liberar todo trafego.

app.get('/', (req,res) => {
    res.status(200).json({message:"API Loja Esportiva"});
});

const RoupasRouter = require("./routers/roupas.routers");
app.use("/roupas",RoupasRouter);

const CalcadosRouter = require("./routers/calcados.routers");
app.use("/calcados",CalcadosRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});