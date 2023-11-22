const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

// Pesquisar ID
router.get('/findById:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersController);

// Criar ID, ENDEREÇOS, PRODUTOS FAVORITOS
router.post('/create', usuarioController.createUserController);
router.post('/addAddres/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProduct);

// Atualizar
router.put('/update/:id', usuarioController.updateUserController);

//deletar ID, ENDEREÇOS, PRODUTOS FAVORITOS
router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAddress', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProduct);

module.router = router;