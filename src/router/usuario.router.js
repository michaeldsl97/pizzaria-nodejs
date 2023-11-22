const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

// Pesquisar ID
router.get('/findById:id');
router.get('/findAll');

// Criar ID, ENDEREÇOS, PRODUTOS FAVORITOS
router.post('/create');
router.post('/addAddres/:id');
router.post('/addFavProduct/:id');

// Atualizar
router.put('/update/:id');

//deletar ID, ENDEREÇOS, PRODUTOS FAVORITOS
router.delete('/remove/:id');
router.delete('/removeAddress');
router.delete('/removeFavProduct');

module.router = router;