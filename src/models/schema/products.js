const mongoose = require('mongoose')

const products = new mongoose.Schema({

  price: {
    type: 'number',
    default: 0
  },
  title: {
    type: 'string'
  },
  description: {
    type: 'string'
  },
  image: {
    type: 'string',
    default: '/assets/img/tequeño.jpg'
  }
})

const model = mongoose.models.products ?? mongoose.model('products', products)

module.exports = model
