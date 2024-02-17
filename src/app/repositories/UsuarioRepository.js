import { consulta } from "../database/conexao.js";

class UsuarioRepository {

    //CRUD 
    create(usuario) {
        let sql = 'INSERT INTO usuario SET ?;';
        return consulta(sql, usuario, 'Dados inválidos, cadastro cancelado!');
    };

    findAll() {
        const sql = 'SELECT * FROM usuario;';
        return consulta(sql, '', 'Nenhum registro encontrado!');
    };

    findById(id) {
        const sql = 'SELECT * FROM usuario WHERE idUsuario=?;';
        return consulta(sql, id, 'Nenhum registro encontrado!');
    };

    update(dados, id) {
        let sql = 'UPDATE usuario SET ? WHERE idUsuario=?;';
        return consulta(sql, [dados, id], 'Dados inválidos, alteração cancelada!');
    };

    delete(id) {
        const sql = 'DELETE FROM usuario WHERE idUsuario=?;';
        return consulta(sql, id, 'Dados inválidos, remoção cancelada!');
    };

}

export default new UsuarioRepository();
