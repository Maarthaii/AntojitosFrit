const ShoppingCart = require('../models/ShoppingCart');

async function createShoppingCart(req, res) {
    try {
        const { producto, cantidad, precioUnitario } = req.body;

        const total = cantidad * precioUnitario;

        const newCart = new ShoppingCart({
            usuario: req.user._id,  
            productos: [{
                nombre: producto,
                cantidad: cantidad,
                precioUnitario: precioUnitario
            }],
            total: total
        });

        const savedCart = await newCart.save();

        res.status(201).json(savedCart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el carrito de compras' });
    }
}

module.exports = {
    createShoppingCart
};
