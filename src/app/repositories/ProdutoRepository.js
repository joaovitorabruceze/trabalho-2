import { consulta } from "../database/conexao.js";

class ProdutoRepository {

    //CRUD Nenhum registro encontrado!
    create(produto) {
        let sql = 'INSERT INTO produto SET ?;';
        return consulta(sql, produto, 'Dados inválidos, cadastro cancelado!');
    };

    findAll() {
        const sql = 'SELECT * FROM produto;';
        return consulta(sql, 'Nenhum registro encontrado!');
    };

    findById(id) {
        const sql = 'SELECT * FROM produto WHERE idProduto=?;';
        return consulta(sql, id, 'Nenhum registro encontrado!');
    };

    update(dados, id) {
        let sql = 'UPDATE produto SET ? WHERE idProduto=?;';
        return consulta(sql, [dados, id], 'Dados inválidos, alteração cancelada!');
    };

    delete(id) {
        const sql = 'DELETE FROM produto WHERE idProduto=?;';
        return consulta(sql, id, 'Dados inválidos, remoção cancelada!');
    };

}

export default new ProdutoRepository();
