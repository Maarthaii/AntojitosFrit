const mongoose = require('mongoose');

const createCart = new mongoose.Schema({
    producto: {
        type: String,
        // required: true
    },
    cantidad: {
        type: Number,
        // required: true,
        default: 1
    },
    precio: {
        type: Number,
        // required: true
    }
});

const userCarts = new mongoose.Schema({
    productos: [createCart],
    total: {
        type: Number,
        // required: true,
        validate: {
            validator: (value) => !isNaN(value),
            message: 'Total no es un valor numerico'
        }
    }
})

const ShoppingCart = mongoose.models.shoppingCart ?? mongoose.model('shoppingCart', createCart);
module.exports= ShoppingCart;





























// // src/models/schema/shoppingCarts
// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     nombre: {
//         type: String,
//         required: true
//     },
//     cantidad: {
//         type: Number,
//         required: true,
//         default: 1
//     }
//     // precioUnitario: {
//     //     type: Number,
//     //     required: true
//     // }
// });

// const shoppingCartSchema = new mongoose.Schema({
//     usuario: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'user', // Ajusta según el modelo de usuario que tengas
//         required: true
//     },
//     productos: [productSchema],
//     total: {
//         type: Number,
//         required: true,
//         validate: {
//             validator: (value) => !isNaN(value),
//             message: 'Total must be a valid number'
//         }
//     }
// });

// module.exports = shoppingCartSchema;
