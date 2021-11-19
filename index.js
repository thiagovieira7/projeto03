require("dotenv").config();

const express = require("express");  //chamando o express

const app = express();  //definindo o app como express

const cors = require("cors");  // importando o CORS para nosso APP

app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./model/conn/index"); //importando a conexao
Conn(); //executa a func de conexao

app.use(cors()); // usando o CORS no APP
app.options("*", cors()); // Configurando o CORS para liberar todo trafego.

app.get('/', (req, res) => {
    res.status(200).json({message:"API Loja Esportiva"});
});

const acessoriosRouter = require("./routers/acessorios.routes");
app.use("/acessorios", acessoriosRouter);

const CalcadosRouter = require("./routers/calcados.routers");
app.use("/calcados", CalcadosRouter);

const equipamentosRouter = require("./routers/equipamentos.routes");
app.use("/equipamentos", equipamentosRouter);

const RoupasRouter = require("./routers/roupas.routers");
app.use("/roupas", RoupasRouter);

const suplementosRouter = require("./routers/suplementos.routes");
app.use("/suplementos", suplementosRouter);


app.listen(process.env.PORT, () => {
  console.info(`App rodando em http://localhost:${process.env.PORT}`);
}); 

// app.listen(port, () => {
//   console.info(`App rodando em http://localhost:${port}`);
// });



