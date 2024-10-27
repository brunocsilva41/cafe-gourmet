const express = require('express');
const path = require('path');
const router = express.Router();

// Serve static files from the 'public' directory
router.use(express.static(path.join(__dirname, '..' ,'pages')));

// Define routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','../index.html'));
});
router.get('/conta', (req, res) => {
    res.sendFile(path.join('..','pages','../pages/conta.html'));
});

router.get('/navegacao_produtos.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..','pages','navegacao_produtos.html'));
});
router.get('/carrinho.html', (req, res) => {
    res.sendFile(path.join(__dirname,'..','pages','carrinho.html'));
});
router.get('/criar_conta.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..','pages', 'criar_conta.html'));
});
router.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..','pages','login.html'));
});
router.get('/finalizacao_compra.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..','pages','finalizacao_compra.html'));
});
router.get('/confirmacao.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..','pages','confirmacao.html'));
});

module.exports = router;
