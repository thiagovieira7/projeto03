const express = require("express"); //import do express
const router = express.Router(); //define app como express
const RoupaController = require('./../controller/roupas.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota Roupas ok"});
});

router.get("/listall", RoupaController.getListall);

router.get("/listid/:id", RoupaController.getListid);

router.post("/add", RoupaController.postAdd);

router.put("/update/:id", RoupaController.putUpdate);

router.delete("/delete/:id", RoupaController.delDelete);

module.exports = router;