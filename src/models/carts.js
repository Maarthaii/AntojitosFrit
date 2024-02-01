const schema = require('./schema/carts')

const setCart = async (products) => {
  return await schema.create(products)
}

module.exports = {
  setCart
}

// const mongoose = require('mongoose');
// const shoppingCartSchema = require('./schema/shoppingCarts');

// const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

// module.exports = ShoppingCart;
