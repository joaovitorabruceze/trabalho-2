import ProdutoRepository from "../repositories/ProdutoRepository.js";

class ProdutoController {

    //cadastra novo produto
    async store(req, res) {
        const dados = req.body;
        try {
            const row = await ProdutoRepository.create(dados);
            res.json(row)
        } catch (err) {
            res.json(err)
        }
    };

    //consulta todos os protudos
    async index(req, res) {
        try {
            const row = await ProdutoRepository.findAll();
            res.json(row)
        } catch (err) {
            res.json(err)
        }
    };

    //consulta os produtos por id
    async show(req, res) {
        const id = Number(req.params.id);
        try {
            const row = await ProdutoRepository.findById(id);
            res.json(row)
        } catch (err) {
            res.json(err)
        }
    };

    //altera dados de um produto por id
    async update(req, res) {
        const id = Number(req.params.id);
        const dados = req.body;
        try {
            const row = await ProdutoRepository.update(dados, id);
            res.json(row)
        } catch (err) {
            res.json(err)
        }
    };

    //deleta um produto por id
    async delete(req, res) {
        const id = Number(req.params.id);
        try {
            const row = await ProdutoRepository.delete(id);
            res.json(row)
        } catch (err) {
            res.json(err)
        }
    };
}

export default new ProdutoController();
