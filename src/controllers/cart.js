const { setCart } = require('../models/carts') // Define un controlador para manejar la logica relacionada con los carritos de compras. Esta funciona se encargara de interactuar con la base de datos o con otro mecanismo de almacenamiento para guardar el carrito de compras.

module.exports = class Controller { // se define el controlador
  async addCarts (req, res) { // este metodo es asincrono y maneja las solicitudes paara agreagr produtos al carrito, recibe dos parametros req(una solicitud) y res (una respuesta)
    try {
      const userId = req.session.userId // toma el is del usuario desde la sesion activa.
      const products = req.body.products // obtiene el array de productos que se estan agregando al carrito desde el cuerpo de la solicitud
      const count = req.body.count // se obtiene la cantidad de productos que se estan agregando al carrito desde el cuerpo de la solicitud (req.body.count)
      // se llama la funcion setcart y se le pasa un objetos con productos, y la cantidad, asi como el userID del usuario que se esta relacionando
      const savedCart = await setCart({ // el await espera una respuesta del stcart lo que quiere decir que esta funcion probablemente interactua con una base de datos asincrona.
        products,
        count
      }, userId)
      // Si la respuesta de setCart es verdadera (es decir, el carrito se guardó correctamente), se imprime un mensaje en la consola y se responde al cliente con un mensaje JSON que indica que el carrito se creó correctamente.
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
