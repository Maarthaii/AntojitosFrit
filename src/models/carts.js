const schema = require('./schema/carts')
const userSchema = require('./schema/users')

const setCart = async (products, userId) => {
  const response = await schema.create(products)
  await userSchema.updateOne(
    { _id: userId },
    {
      $push: {
        history: response._id
      }
    }
  )
  return response
}

module.exports = {
  setCart
}

// const mongoose = require('mongoose');
// const shoppingCartSchema = require('./schema/shoppingCarts');

// const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

// module.exports = ShoppingCart;
