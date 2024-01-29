

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true,
        default: 1
    },
    precioUnitario: {
        type: Number,
        required: true
    }
});

const shoppingCartSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    productos: [productSchema],
    total: {
        type: Number,
        required: true
    }
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;
