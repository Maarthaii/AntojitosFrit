const mongoose = require('mongoose')

const cart = new mongoose.Schema({
  products: [{
    price: {
      type: 'number',
      default: 0
    },
    name: {
      type: 'string'
    },
    _id: {
      type: 'number'
    }
  }],
  count: {
    type: 'number',
    default: 1
  }
})

const model = mongoose.models.cart ?? mongoose.model('cart', cart)

module.exports = model

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
