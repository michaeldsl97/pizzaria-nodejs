const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

// rotas GET
// Pesquisar ID
router.get('/findById/:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersController);

// rotas POST
// Criar ID, ENDEREÇOS, PRODUTOS FAVORITOS
router.post('/create', usuarioController.createUserController);
router.post('/addAddress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProductController);

// rotas PUT
// Atualizar
router.put('/update/:id', usuarioController.updateUserController);

// rotas DELETE
// Deletar ID, ENDEREÇOS, PRODUTOS FAVORITOS
router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAddress', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProductController);

module.exports = router;

