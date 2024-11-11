const mongoose = require('mongoose') // se importa una biblioteca de mongodb para node.js para definir esquemas modelos y manejar la interaccion con la base de datos.

const carts = new mongoose.Schema({
  products: [{ // es un array de objetos, cada objeto tiene los siguiente subcampos
    price: { // define el precio del producto, es de tipo numero y por defecto es 0
      type: 'number',
      default: 0
    },
    title: {
      type: 'string'
    },
    _id: { // _id: El ID del producto, que es un objeto de tipo ObjectId. Este campo se utiliza para referenciar a un producto específico en la colección de products (esto es lo que hace la propiedad ref: 'products').
      type: mongoose.Schema.ObjectId,
      ref: 'products'
    }
  }],
  count: { // count: Este campo define la cantidad de productos en el carrito. Es de tipo number y tiene un valor por defecto de 1.
    type: 'number',
    default: 1
  }
})

// mongoose.models.carts ?? mongoose.model('carts', carts): Esta línea garantiza que el modelo de carts se cree solo una vez. Si el modelo ya existe en mongoose.models.carts, se reutiliza, y si no, se crea utilizando el esquema carts. Esto es útil para evitar errores cuando se define el modelo varias veces en diferentes partes de la aplicación. module.exports = model: El modelo creado se exporta para que pueda ser utilizado en otras partes de la aplicación, como en los controladores para interactuar con los datos de los carritos.
const model = mongoose.models.carts ?? mongoose.model('carts', carts)

module.exports = model

/**
 * Resumen del flujo:
El esquema de carts define cómo se estructuran los documentos de los carritos de compra, incluyendo la lista de productos y la cantidad.
El modelo de carts se crea a partir de este esquema y se exporta, permitiendo que otras partes de la aplicación interactúen con los datos de los carritos, como en los controladores que guardan o consultan los carritos.
 */
