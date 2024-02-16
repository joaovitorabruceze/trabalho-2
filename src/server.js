import app from "./index.js";

let data = new Date();
const port = 8080;

app.listen(port, () => {
    console.log('Servidor node iniciado em: ' + data + '\nDisponível em http://localhost:' + port);
});
