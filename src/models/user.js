const schema = require('./schema/users')

// Registrar un usuario
const createUser = async (users) => {
  return await schema.create(users)
}

// Encontrar un usuario
const findUser = async (user) =>
  schema.findOne({ email: user.email, password: user.password }).populate('history')

// Informacion de usuario por Id
const findUserById = (userId) =>
  schema.findById(userId).populate('history')

module.exports = {
  createUser,
  findUser,
  findUserById
}
