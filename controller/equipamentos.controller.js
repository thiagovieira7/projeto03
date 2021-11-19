const equipamentos = require("./../model/equipamentos");

// function validarAddUpdt(res, reqisicao) {
//   if (!reqisicao.nome) {
//     res.status(400).send({
//       message: "NOME inválido. Verifique as informações da requisição no body.",
//     });
//     return true;
//   } else if (!reqisicao.qtdBairros) {
//     res.status(400).send({
//       message:
//         "QTDBAIRROS inválida. Verifique as informações da requisição no body.",
//     });
//     return true;
//   } else if (!reqisicao.populacao) {
//     res.status(400).send({
//       message:
//         "POPULAÇÃO inválida. Verifique as informações da requisição no body.",
//     });
//     return true;
//   } else if (!reqisicao.dtAniversario) {
//     res.status(400).send({
//       message:
//         "DTANIVERSARIO inválida. Verifique as informações da requisição no body.",
//     });
//     return true;
//   }
// }

// function validaId(res, id) {
//   if (id.length !== 24) {
//     res.status(400).json({ message: "id precisa ter 24 caracteres" });
//     return true;
//   }
// }

exports.getAll = async (req, res) => {
  await equipamentos
    .find({})
    .then((equipamentos) => {
      res.status(200).json(equipamentos);
    })
    .catch((err) => {
      res.status(404).json({ message: "Informação não encontrada" });
      console.error(err);
    });
};

exports.getDescri = async (req, res) => {
//   if (validaId(res, req.params.id)) return;
  await equipamentos
    .findById(req.params.id)
    .then((equipamentos) => {
      console.log(equipamentos.descri);

      if (equipamentos == null) {
        res.status(404).json({ message: "Não localizado" });
      } else {
        res.status(200).json(equipamentos);
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "Nenhum resultado encontrado" });
      console.error(err);
    });
};

exports.postAdd = async (req, res) => {
//   if (validarAddUpdt(res, req.body)) return;

  await equipamentos
    .create(req.body)
    .then(() => {
      res.status(200).json({ message: "Equipamento cadastrada com sucesso." });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro ao cadastrar" });
      console.error(err);
    });
};

exports.putUpdate = async (req, res) => {
//   if (validaId(res, req.params.id)) return;
//   if (validarAddUpdt(res, req.body)) return;
  await equipamentos
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res
        .status(200)
        .json({ message: "Informação do equipamento alterado com sucesso" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro ao atualizar" });
      console.error(err);
    });
};

exports.deleteDel = async (req, res) => {
  if (validaId(res, req.params.id)) return;
  await equipamentos
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Deletado com sucesso" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Erro ao deletar" });
    });
};
