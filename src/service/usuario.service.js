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
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeUserService = (id) => {
    return Usuario.findByIdAndDelete(id); //remove não funcionou
};

const addUserAddressService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                enderecos: endereco,
            }
        },
        {
            rawResul: true.valueOf,
        }
    );
};

const removeUserAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                enderecos: {
                    _id: addressId
                },
            }
        },
        {
            rawResul: true.valueOf,
        }
    );
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