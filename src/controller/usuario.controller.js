// Find
const findUserByIdController = async (req, res) => {
    try{



    }catch(err){
        console.log(`erro: ${err.messege}`);
        return res.status(500).send({ messege: `Erro inesperado tente novamente`});
    }
};


//finAll
const findAllUsersController = async (req, res) => {
    try{



    }catch(err){
        console.log(`erro: ${err.messege}`);
        return res.status(500).send({ messege: `Erro inesperado tente novamente`});
    }
};


//Create
const createUserController = async (req, res) => {
    try{



    }catch(err){
        console.log(`erro: ${err.messege}`);
        return res.status(500).send({ messege: `Erro inesperado tente novamente`});
    }
};


//Update
const updateUserController = async (req, res) => {
    try{



    }catch(err){
        console.log(`erro: ${err.messege}`);
        return res.status(500).send({ messege: `Erro inesperado tente novamente`});
    }
};


//Remove
const removeUserController = async (req, res) => {
    try{



    }catch(err){
        console.log(`erro: ${err.messege}`);
        return res.status(500).send({ messege: `Erro inesperado tente novamente`});
    }
};


// Add Address
const addUserAddressController = async (req, res) => {
    try{



    }catch(err){
        console.log(`erro: ${err.messege}`);
        return res.status(500).send({ messege: `Erro inesperado tente novamente`});
    }
};


// Remove Address
const removeUserAddressController = async (req, res) => {
    try{



    }catch(err){
        console.log(`erro: ${err.messege}`);
        return res.status(500).send({ messege: `Erro inesperado tente novamente`});
    }
};


// Add Fav Product
const addUserFavProductController = async (req, res) => {
    try{



    }catch(err){
        console.log(`erro: ${err.messege}`);
        return res.status(500).send({ messege: `Erro inesperado tente novamente`});
    }
};


// Remove Fav Produtc
const removeUserFavProductController = async (req, res) => {
    try{



    }catch(err){
        console.log(`erro: ${err.messege}`);
        return res.status(500).send({ messege: `Erro inesperado tente novamente`});
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