const mongoose = require('mongoose')

const createUser = new mongoose.Schema({
  nombre: {
    type: 'string',
    required: true
  },
  telefono: {
    type: 'string'
  },
  correo: {
    type: 'string',
    required: true
  },
  contraseña: {
    type: 'string',
    required: true
  }
})

const Users = mongoose.models.user ?? mongoose.model('users', createUser)

module.exports = Users
