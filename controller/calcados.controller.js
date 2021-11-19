const Calcado = require("./../model/calcados"); 

exports.getListall = async (req,res) => {
    await Calcado.find({}).then((calcados) => {
        res.status(200).json(calcados);
    }).catch((err) => {
        res.status(404).json({message: "Nenhum Calçado foi encontrado"});
        console.error(err);
    });
}

exports.getListid = async (req,res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
        return true;
    }
    await Calcado.findById(req.params.id).then((calcado) => {
        res.status(200).json(calcado);
    }).catch((err) => {
        res.status(404).json({message: "Nenhum Calçado foi encontrado"});
        console.error(err);
    });
}

exports.postAdd = async (req,res) => {
    if(!req.body.tipo){
        res.status(400).json({message: "Tipo está vazio"});
        return;
    }
    if(!req.body.genero){
        res.status(400).json({message: "Gênero está vazio"});
        return;
    }
    if(!req.body.marca){
        res.status(400).json({message: "Marca está vazio"});
        return;
    }
    if(!req.body.tamanho){
        res.status(400).json({message: "Tamanho está vazio"});
        return;
    }
    if(!req.body.cor){
        res.status(400).json({message: "Cor está vazio"});
        return;
    }
    
    await Calcado.create(req.body).then( () => {
        res.status(201).json({message: "Calçado inserido com sucesso!!!"})
    }).catch((err) => {
        res.status(400).json({message: "Algo está errado"});
        console.error(err);
    });
}

exports.putUpdate = async (req,res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
        return true;
    }
    if(!req.body.tipo){
        res.status(400).json({message: "Tipo está vazio"});
        return;
    }
    if(!req.body.genero){
        res.status(400).json({message: "Gênero está vazio"});
        return;
    }
    if(!req.body.marca){
        res.status(400).json({message: "Marca está vazio"});
        return;
    }
    if(!req.body.tamanho){
        res.status(400).json({message: "Tamanho está vazio"});
        return;
    }
    if(!req.body.cor){
        res.status(400).json({message: "Cor está vazio"});
        return;
    }
    
    await Calcado.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Calçado atualizado com sucesso!!!"})
    }).catch((err) => {
        res.status(400).json({message: "Algo deu errado!!!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
        return true;
    }
    await Calcado.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Calçado deletado com sucesso!!!"});
    }).catch((err) => {
        res.status(404).json({message: "Nenhum Calçado foi encontrado"});
        console.error(err);
    });
}