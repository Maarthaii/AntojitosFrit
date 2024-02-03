const schema = require('./schema/users')

// Registrar un usuario
const createUser = async (users) => {
  return await schema.create(users)
}

// Encontrar un usuario
const findUser = async (user) => {
  return await schema.findOne({ email: user.email, password: user.password }).populate('history')
}

module.exports = {
  createUser,
  findUser
}
