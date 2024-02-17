import UsuarioRepository from "../repositories/UsuarioRepository.js";

class UsuarioController {

    //cadastra novo usuario
    async store(req, res) {
        const dados = req.body;
        try {
            const row = await UsuarioRepository.create(dados);
            res.json(row)
        } catch (err) {
            res.json(err)
        }
    };

    //consulta todos os usuarios
    async index(req, res) {
        try {
            const row = await UsuarioRepository.findAll();
            res.json(row)
        } catch (err) {
            res.json(err)
        }
    };

    //consulta os usuarios por id
    async show(req, res) {
        const id = Number(req.params.id);
        try {
            const row = await UsuarioRepository.findById(id);
            res.json(row)
        } catch (err) {
            res.json(err)
        }
    };

    //altera dados de um usuario por id
    async update(req, res) {
        const id = Number(req.params.id);
        const dados = req.body;
        try {
            const row = await UsuarioRepository.update(dados, id);
            res.json(row)
        } catch (err) {
            res.json(err)
        }
    };

    //deleta um usuario por id
    async delete(req, res) {
        const id = Number(req.params.id);
        try {
            const row = await UsuarioRepository.delete(id);
            res.json(row)
        } catch (err) {
            res.json(err)
        }
    };
}

export default new UsuarioController();
