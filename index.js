const express = require("express");
const connectToDatabase = require("./src/database/database"); //Arquivo de conexão com o banco de dados

const usuario = require("./src/router/usuario.router"); //Arquivo de rota do usuário

const app = express();

const port = 3000;

app.use(express.json());


connectToDatabase(); //Conectando com o banco de dados

app.use("/usuario", usuario); //Chamando as rotas do usuário

app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo a melhor pizzaria da região"
    });
})


app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})