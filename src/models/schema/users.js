const mongoose = require('mongoose');

const createUser = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String
    },
    correo: {
        type: String
    },
    contraseña: {
        type: String,
        required: true
    }
});

const Users = mongoose.models.user ?? mongoose.model('users', createUser);

module.exports = Users;
