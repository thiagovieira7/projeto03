const express = require("express");
const router = express.Router();

const suplementosController = require("./../controller/suplementos.controller");

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Rota Acessorios ok. Escolha entre as seguintes opções: ( /listall) ( /listname ) ( add ) ( update ) ( delete )",
  });
});

router.get("/listall", suplementosController.getAll);

router.get("/listname/:id", suplementosController.getDescri);

router.post("/add", suplementosController.postAdd);

router.put("/update/:id", suplementosController.putUpdate);

router.delete("/delete/:id", suplementosController.deleteDel);

module.exports = router;
