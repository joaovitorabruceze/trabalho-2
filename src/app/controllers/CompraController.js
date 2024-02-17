import CompraRepository from "../repositories/CompraRepository.js";

class CompraController {

    //lista compras
    async list(req, res) {
        try {
            const row = await CompraRepository.listar();
            res.status(200).json(row);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    //realiza compra
    async buy(req, res) {
        const dados = req.body;
        if (await CompraRepository.validaEstoque(dados)) {
            try {
                const row = await CompraRepository.comprar(dados);
                const msg = 'Compra realizada!'
                res.status(201).json(msg);
            } catch (err) {
                res.status(400).json(err);
            }
        }
        else res.status(400).json('Estoque indisponível!');
    };
}

export default new CompraController();