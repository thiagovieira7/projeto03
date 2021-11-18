require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const Conn = require("./model/conn/index");

Conn();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Rota Lojas Esportivas ok" });
});

const acessoriosRouter = require("./routers/acessorios.routes");
app.use("/acessorios", acessoriosRouter);

const calcadosRouter = require("./routers/calcados.routes");
app.use("/calcados", calcadosRouter);

const equipamentosRouter = require("./routers/equipamentos.routes");
app.use("/equipamentos", equipamentosRouter);

const roupasRouter = require("./routers/roupas.routes");
app.use("/roupas", roupasRouter);

const suplementosRouter = require("./routers/suplementos.routes");
app.use("/suplementos", suplementosRouter);

app.listen(process.env.PORT, () => {
  console.info(`App rodando em http://localhost:${process.env.PORT}`);
}); 

// app.listen(port, () => {
//   console.info(`App rodando em http://localhost:${port}`);
// });
