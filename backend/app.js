const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const db_password = process.env.db_password;
const db_host = process.env.db_host;
const db_user = process.env.db_user;
const db_port = process.env.db_port;
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
    host: 'db_host',    // Endereço do banco de dados
    user: 'db_user',    // Usuário do banco de dados
    password: 'db_senha',  // Senha do banco de dados
    database: 'nomedobancodedados',   // Nome do banco de dados
    port: 'db_port'  // Porta do banco de dados
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

// Rota para receber dados do formulário
app.post('/criar-conta', (req, res) => {
    const { name, email, password } = req.body;
    
    // Criptografar a senha antes de salvar (recomendado)
    const sql = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
    db.query(sql, [name, email, password], (err, result) => {
        if (err) throw err;
        res.send('Conta criada com sucesso!');
    });
});

app.get('/login', (req, res) => { const { email, password } = req.query;
    const sql = `SELECT * FROM usuarios WHERE email = ? AND senha = ?`;
    db.query(sql, [email, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send('Login realizado com sucesso!');
        } else {
            res.send('E-mail ou senha incorretos!');
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3306');
});
