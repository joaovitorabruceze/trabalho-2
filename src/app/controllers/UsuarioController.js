import UsuarioRepository from "../repositories/UsuarioRepository.js";

class UsuarioController {

    //cadastra novo usuario
    async store(req, res) {
        const dados = req.body;
        try {
            const row = await UsuarioRepository.create(dados);
            const msg = `Novo usuário cadastrado! Id do usuário novo: ${row.insertId};`
            res.status(201).json(msg);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    //consulta todos os usuarios
    async index(req, res) {
        try {
            const row = await UsuarioRepository.findAll();
            res.status(200).json(row);
        } catch (err) {
            res.status(404).json(err);
        }
    };

    //consulta os usuarios por id
    async show(req, res) {
        const id = Number(req.params.id);
        try {
            const row = await UsuarioRepository.findById(id);
            (row.length > 0) ?
                res.status(200).json(row) :
                res.status(404).json('Nenhum registro encontrado!');
        } catch (err) {
            res.status(400).json(err);
        }
    };

    //altera dados de um usuario por id
    async update(req, res) {
        const id = Number(req.params.id);
        const dados = req.body;
        try {
            const row = await UsuarioRepository.update(dados, id);
            (row.changedRows > 0) ?
                res.status(200).json('Alteração concluída com sucesso!') :
                res.status(404).json('Nenhum registro encontrado!');
        } catch (err) {
            res.status(400).json(err);
        }
    };

    //deleta um usuario por id
    async delete(req, res) {
        const id = Number(req.params.id);
        try {
            const row = await UsuarioRepository.delete(id);
            (row.affectedRows > 0) ?
                res.status(200).json('Usuário deletado com sucesso!') :
                res.status(404).json('Nenhum registro encontrado!');
        } catch (err) {
            res.status(400).json(err);
        }
    };
}

export default new UsuarioController();
