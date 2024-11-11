const schema = require('./schema/carts') // modelo del carrito de compras
const userSchema = require('./schema/users') // modelo para los usuarios

const setCart = async (products, userId) => { // la funcion setcart acepta dos terminos, productos (un objeto o arreglo de productos que el usuario ha agregado al carrito) y userid (el id del usuario al que se le asociara el carrito)
  const response = await schema.create(products) // Se crea un nuevo carrito en la base de datos utilizando el modelo schema. products contiene los productos que el usuario ha agregado al carrito. La función create() de Mongoose guarda este carrito en la colección correspondiente y devuelve el objeto response, que contiene el carrito recién creado (con su ID y otros detalles generados por MongoDB).
  await userSchema.updateOne( // Después de crear el carrito, la función actualiza el historial de compras del usuario. Utiliza el método updateOne() de Mongoose para buscar al usuario por su userId y añadir el ID del carrito recién creado al campo history del documento del usuario. La operación $push agrega el ID del carrito al arreglo history de ese usuario.
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

/*
Resumen del flujo:
El cliente envía una solicitud para crear un carrito de compras.
La función setCart recibe los productos y el ID del usuario.
Se crea un nuevo carrito de compras con los productos.
Se actualiza el historial del usuario, añadiendo el ID del carrito creado.
Se devuelve el carrito recién creado.
*/
