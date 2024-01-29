
const ShoppingCart = require('./schema/shoppingCarts');

// Registrar información del carrito de compras
const createCarts = async (shoppingCartData) => {
    try {
        const newShoppingCart = new ShoppingCart(shoppingCartData);
        return await newShoppingCart.save();
    } catch (error) {
        console.error(error);
        throw new Error('Error al crear el carrito de compras');
    }
};

module.exports = {
    createCarts
};
