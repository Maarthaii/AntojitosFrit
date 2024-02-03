const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true
  },
  phone: {
    type: 'string'
  },
  email: {
    type: 'string',
    required: true
  },
  password: {
    type: 'string',
    required: true
  },
  history: [{
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'carts'
  }]
})

module.exports = mongoose.models.user ?? mongoose.model('users', schema)
