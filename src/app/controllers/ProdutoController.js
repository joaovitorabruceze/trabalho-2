import ProdutoRepository from "../repositories/ProdutoRepository.js";

class ProdutoController {

    //cadastra novo produto
    async store(req, res) {
        const dados = req.body;
        try {
            const row = await ProdutoRepository.create(dados);
            const msg = `Novo produto cadastrado! Id do produto novo: ${row.insertId};`
            res.status(201).json(msg);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    //consulta todos os protudos
    async index(req, res) {
        try {
            const row = await ProdutoRepository.findAll();
            res.status(200).json(row);
        } catch (err) {
            res.status(404).json(err);
        }
    };

    //consulta os produtos por id
    async show(req, res) {
        const id = Number(req.params.id);
        try {
            const row = await ProdutoRepository.findById(id);
            (row.length > 0) ?
                res.status(200).json(row) :
                res.status(404).json('Nenhum registro encontrado!');
        } catch (err) {
            res.status(400).json(err);
        }
    };

    //altera dados de um produto por id
    async update(req, res) {
        const id = Number(req.params.id);
        const dados = req.body;
        try {
            const row = await ProdutoRepository.update(dados, id);
            (row.changedRows > 0) ?
                res.status(200).json('Alteração concluída com sucesso!') :
                res.status(404).json('Nenhum registro encontrado!');
        } catch (err) {
            res.status(400).json(err);
        }
    };

    //deleta um produto por id
    async delete(req, res) {
        const id = Number(req.params.id);
        try {
            const row = await ProdutoRepository.delete(id);
            (row.affectedRows > 0) ?
                res.status(200).json('Produto deletado com sucesso!') :
                res.status(404).json('Nenhum registro encontrado!');
        } catch (err) {
            res.status(400).json(err);
        }
    };
}

export default new ProdutoController();
