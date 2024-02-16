import ProdutoRepository from "../repositories/ProdutoRepository.js";

class ProdutoController {

    //cadastra novo produto
    async store(req, res) {
        const dados = req.body;
        const row = await ProdutoRepository.create(dados);
        res.json(row)
    };

    //consulta todos os protudos
    async index(req, res) {
        const row = await ProdutoRepository.findAll()
        res.json(row)
    };

    //consulta os produtos por id
    async show(req, res) {
        const id = Number(req.params.id);
        const row = await ProdutoRepository.findById(id);
        res.json(row)
    };

    //altera dados de um produto por id
    async update(req, res) {
        const id = Number(req.params.id);
        const dados = req.body;
        const row = await ProdutoRepository.update(dados, id);
        res.json(row)
    };

    //deleta um produto por id
    async delete(req, res) {
        const id = Number(req.params.id);
        const row = await ProdutoRepository.delete(id);
        res.json(row)
    };
}

export default new ProdutoController();
