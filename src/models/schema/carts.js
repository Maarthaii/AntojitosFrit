const mongoose = require('mongoose')

const carts = new mongoose.Schema({
  products: [{
    price: {
      type: 'number',
      default: 0
    },
    title: {
      type: 'string'
    },
    _id: {
      type: mongoose.Schema.ObjectId,
      ref: 'products'
    }
  }],
  count: {
    type: 'number',
    default: 1
  }
})

const model = mongoose.models.carts ?? mongoose.model('carts', carts)

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
