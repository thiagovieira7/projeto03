const acessorios = require("./../model/acessorios");

<<<<<<< HEAD
// function validarAddUpdt(res, reqisicao) {
//   if (!reqisicao.produto) {
//     res.status(400).send({
//       message: "NOME inválido. Verifique as informações da requisição no body.",
//     });
//     return true;
//   } else if (!reqisicao.marca) {
//     res.status(400).send({
//       message:
//         "QTDBAIRROS inválida. Verifique as informações da requisição no body.",
//     });
//     return true;
//   } else if (!reqisicao.caracteristicas) {
//     res.status(400).send({
//       message:
//         "POPULAÇÃO inválida. Verifique as informações da requisição no body.",
//     });
//     return true;
//   } else if (!reqisicao.peso) {
//     res.status(400).send({
//       message:
//         "DTANIVERSARIO inválida. Verifique as informações da requisição no body.",
//     });
//     return true;
//   }
// }
=======
function validaEntrada(res, reqisicao) {
  if (!reqisicao.produto) {
    res.status(400).send({
      message: "Verifique as informações do nome do PRODUTO na requisição no body",
    });
    return true;
  } else if (!reqisicao.marca) {
    res.status(400).send({
      message:
        "Verifique as informações sobre a MARCA na requisição no body.",
    });
    return true;
  } else if (!reqisicao.caracteristicas) {
    res.status(400).send({
      message:
        "Verifique as informações daS CARACTERISTICAS na requisição no body.",
    });
    return true;
  } else if (!reqisicao.peso) {
    res.status(400).send({
      message:
        "Verifique as informações sobre o PESO na requisição no body..",
    });

  } else if (!reqisicao.valor) {
    res.status(400).send({
      message:
        "Verifique as informações sobre o VALOR na requisição no body..",
    });

    return true;
  }
}
>>>>>>> thiagoDevelop

function validaId(res, id) {
  if (id.length !== 24) {
    res.status(400).json({ message: "id precisa ter 24 caracteres" });
    return true;
  }
}

exports.getAll = async (req, res) => {
  await acessorios
    .find({})
    .then((acessorios) => {
      res.status(200).json(acessorios);
    })
    .catch((err) => {
      res.status(404).json({ message: "Informação não encontrada" });
      console.error(err);
    });
};

exports.getListid = async (req, res) => {
  if (validaId(res, req.params.id)) return;
  await acessorios
    .findById(req.params.id)
    .then((acessorios) => {
      console.log(acessorios.produto);

      if (acessorios == null) {
        res.status(404).json({ message: "Não localizado" });
      } else {
        res.status(200).json(acessorios);
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "Nenhum resultado encontrado" });
      console.error(err);
    });
};

exports.postAdd = async (req, res) => {
  if (validaEntrada(res, req.body)) return;

  await acessorios
    .create(req.body).then(() => {
      res.status(200).json({ message: "cadasto realizado com sucesso." });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro ao cadastrar" });
      console.error(err);
    });
};

exports.putUpdate = async (req, res) => {
  if (validaId(res, req.params.id)) return;
  if (validaEntrada(res, req.body)) return;
  await acessorios
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res
        .status(200)
        .json({ message: "Informações alterados com sucesso" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro ao atualizar" });
      console.error(err);
    });
};

exports.deleteDel = async (req, res) => {
  if (validaId(res, req.params.id)) return;
  await acessorios
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Deletado com sucesso" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Erro ao deletar" });
    });
}
