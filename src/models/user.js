const schema = require('./schema/users');

const createUser = async (users)=>{
    return await schema.create(users)
}

const findUser = async (user)=>{
    return await schema.findOne({nombre: user.nombre, contraseña: user.contraseña});
}

module.exports={
    createUser,
    findUser
}