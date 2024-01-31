const schema = require('./schema/shoppingCart');

const createUserCart = async (userCarts)=>{
    return await schema.create(userCarts)
}

module.exports={
    createUserCart
}




// const mongoose = require('mongoose');
// const shoppingCartSchema = require('./schema/shoppingCarts');

// const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

// module.exports = ShoppingCart;

