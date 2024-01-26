const schema = require('./schema/user');

const createUser = async (user)=>{
    return await schema.create(user)
}

module.exports={
    createUser
}