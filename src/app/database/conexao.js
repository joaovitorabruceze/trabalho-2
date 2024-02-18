import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'trabalho2.mysql.database.azure.com',//localhost
    port: '3306',//3306
    user: 'administrador',//root
    password: 'Root0000',//root
    database: 'trabalho2'//trabalho2
});

conexao.connect();

const consulta = (sql, valores = '', msgReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if (erro) return reject(msgReject);
            const row = JSON.parse(JSON.stringify(resultado));
            return resolve(row);
        })
    })
};

export { conexao, consulta };
