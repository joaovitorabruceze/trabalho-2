import { consulta } from "../database/conexao.js";
import ProdutoRepository from "./ProdutoRepository.js";


class DevolucaoRepository {

    findById(id) {
        const sql = 'SELECT * FROM compra WHERE idCompra=?;';
        return consulta(sql, id, 'Dados inválidos!');
    };

    update(dados, id) {
        const sql = 'UPDATE compra SET ? WHERE idCompra=?;';
        return consulta(sql, [dados, id], 'Dados inválidos, alteração cancelada!');
    };

    async devolver(id) {
        try {
            const row = await this.findById(id);
            //if (!(row[0].devolucao)) {
            if (row.length > 0) {
                const row2 = await ProdutoRepository.findById(row[0].idProduto);
                const jsonProduto = { estoque: (row2[0].estoque + row[0].qtdeProduto) };
                //const jsonCompra = { devolucao: true };
                await ProdutoRepository.update(jsonProduto, row2[0].idProduto);
                //await this.update(jsonCompra, row[0].idCompra);
            }
            //} res.status(400).json('Código de compra inválido, esta compra já foi devolvida!');
        } catch (err) {
            res.status(400).json(err);
        }
    };
}

export default new DevolucaoRepository();