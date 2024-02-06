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
