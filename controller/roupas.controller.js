const Roupa = require("./../model/roupas"); 

exports.getListall = async (req,res) => {
    await Roupa.find({}).then((roupas) => {
        res.status(200).json(roupas);
    }).catch((err) => {
        res.status(404).json({message: "Nenhuma Roupa foi encontrada"});
        console.error(err);
    });
}

exports.getListid = async (req,res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
        return true;
    }
    await Roupa.findById(req.params.id).then((roupa) => {
        res.status(200).json(roupa);
    }).catch((err) => {
        res.status(404).json({message: "Nenhuma Roupa foi encontrada"});
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
    
    await Roupa.create(req.body).then( () => {
        res.status(201).json({message: "Roupa inserido com sucesso!!!"})
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

    await Roupa.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Roupa atualizado com sucesso!!!"})
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
    await Roupa.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Roupa deletada com sucesso!!!"});
    }).catch((err) => {
        res.status(404).json({message: "Nenhuma Roupa foi encontrada"});
        console.error(err);
    });
}