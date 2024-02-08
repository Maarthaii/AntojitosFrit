const { setCart } = require('../models/carts')

module.exports = class Controller {
  async addCarts (req, res) {
    try {
      const userId = req.session.userId
      const products = req.body.products
      const count = req.body.count

      const savedCart = await setCart({
        products,
        count
      }, userId)

      if (savedCart) {
        console.log('Se ha guardado la información del carrito de compras', savedCart)
        return res.json({ mensaje: 'Carrito creado correctamente', carrito: savedCart })
        // return res.json({ carrito: savedCart })
      }
      res.status(500).json({ error: 'Error al guardar el carrito en el servidor' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error al procesar el carrito en el servidor' })
    }
  }
}
