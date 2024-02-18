import { consulta } from "../database/conexao.js";
import ProdutoRepository from "./ProdutoRepository.js";


class CompraRepository {

    listar() {
        const sql = 'SELECT * FROM compra;';
        return consulta(sql, '', 'Dados inválidos!');
    };

    async validaEstoque(dados) {
        try {
            const row = await ProdutoRepository.findById(dados.idProduto);
            if (row.length > 0) {
                if (dados.qtdeProduto <= row[0].estoque) {
                    const json = { estoque: (row[0].estoque - dados.qtdeProduto) };
                    await ProdutoRepository.update(json, dados.idProduto);
                    return true
                } else return false
            }
        } catch (err) {
            res.status(400).json(err);
        }
    };

    comprar(dados) {
        const sql = 'INSERT INTO compra SET ?;';
        return consulta(sql, dados, 'Dados inválidos, compra cancelada!');
    };
}

export default new CompraRepository();