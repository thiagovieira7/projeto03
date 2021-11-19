const express = require("express");
const router = express.Router();

const equipamentosController = require("../controller/equipamentos.controller");

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Rota Acessorios ok. Escolha entre as seguintes opções: ( /listall) ( /listid ) ( add ) ( update ) ( delete )",
  });
});

router.get("/listall", equipamentosController.getAll);

router.get("/listid/:id", equipamentosController.getlistid);

router.post("/add", equipamentosController.postAdd);

router.put("/update/:id", equipamentosController.putUpdate);

router.delete("/delete/:id", equipamentosController.deleteDel);

module.exports = router;
