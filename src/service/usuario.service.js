const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const findAllUsersService = () => {
    return Usuario.find();
};

const createUserService = (body) => {
    return Usuario.create(body);
};

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after"});
};

const removeUserService = (id) => {
    return Usuario.findByIdAndDelete(id); //remove não funcionou
};

const addUserAddressService = (id, endereco) => {

};

const removeUserAddressService = (id) => {

};

const addUserFavProductService = (id, produto) => {

};

const removeUserFavProductService = (produto) => {

};


module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    removeUserService,
    addUserAddressService,
    removeUserAddressService,
    addUserFavProductService,
    removeUserFavProductService,
}


//findByIdAndRemove