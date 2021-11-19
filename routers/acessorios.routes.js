const express = require("express");
const router = express.Router();

const acessoriosController = require("./../controller/acessorios.controller");

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Rota Acessorios ok. Escolha entre as seguintes opções: ( /listall) ( /listid ) ( add ) ( update ) ( delete )",
  });
});

router.get("/listall", acessoriosController.getAll);

router.get("/listid/:id", acessoriosController.getlistid);

router.post("/add", acessoriosController.postAdd);

router.put("/update/:id", acessoriosController.putUpdate);

router.delete("/delete/:id", acessoriosController.deleteDel);

module.exports = router;
