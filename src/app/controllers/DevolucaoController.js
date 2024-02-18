import DevolucaoRepository from "../repositories/DevolucaoRepository.js";

class DevolucaoController {

    //realiza devolução da compra
    async restore(req, res) {
        const id = Number(req.params.id);
        try {
            const row = await DevolucaoRepository.devolver(id);
            res.status(200).json('Devolução realizada com sucesso!')
        } catch (err) {
            res.status(404).json(err);
        }
    };
}

export default new DevolucaoController();