const userService = require("../service/usuario.service");


// Find
const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: "Usuario não encontrado, tente novamente" });
        }

        return res.status(200).send(user);

    } catch (err) {
        if (err.kind == "ObjectId") {
            //console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: "ID informado, esta incorreto, tente novamente!" });
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente` });
    }
};


//findAll
const findAllUsersController = async (req, res) => {
    try {

        return res.status(200).send(await userService.findAllUsersService());

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente` });
    }
};


//Create
const createUserController = async (req, res) => {
    try {
        const body = req.body;

        if (!body.nome) {
            return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!` });
        }

        return res.status(201).send(await userService.createUserService(body));

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente` });
    }
};


//Update
const updateUserController = async (req, res) => {
    try {
        const body = req.body;

        if (!body.nome) {
            return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!` });
        }

        return res.send(await userService.updateUserService(req.params.id, body));

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente` });
    }
};


//Remove
const removeUserController = async (req, res) => {
    try {

        const deletedUser = await userService.removeUserService(req.params.id);

        console.log(deletedUser);


        if (deletedUser == null){
            res.status(404).send({ messege: `Usuário não encontrado, tente novamente` });
        } else {
            res.status(200).send({ messege: `Sucesso, usuário deletado!` });
        }

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente` });
    }
};


// Add Address
const addUserAddressController = async (req, res) => {
    try {



    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente` });
    }
};


// Remove Address
const removeUserAddressController = async (req, res) => {
    try {



    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente` });
    }
};


// Add Fav Product
const addUserFavProductController = async (req, res) => {
    try {



    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente` });
    }
};


// Remove Fav Produtc
const removeUserFavProductController = async (req, res) => {
    try {



    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente` });
    }
};


module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removeUserFavProductController,
}

