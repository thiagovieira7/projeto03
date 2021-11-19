const express = require("express"); //import do express
const router = express.Router(); //define app como express
const CalcadoController = require('./../controller/calcados.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota Calçados ok"});
});

router.get("/listall", CalcadoController.getListall);

router.get("/listid/:id", CalcadoController.getListid);

router.post("/add", CalcadoController.postAdd);

router.put("/update/:id", CalcadoController.putUpdate);

router.delete("/delete/:id", CalcadoController.delDelete);

module.exports = router;