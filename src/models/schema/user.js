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

const User = mongoose.models.user ?? mongoose.model('user', createUser);

module.exports = User;
