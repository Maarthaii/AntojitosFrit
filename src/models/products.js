const schema = require('./schema/products') // toma la estructura de la base de datos

const getProducts = async () => { // funcion asincronica, que devuelve los productos de la base de datos
  return await schema.find() // metodo de mongoose que devuleve una promesa y es ocmo una operacion asincronica, se usa awai para esperar que la promesa se resuelva y devuelva los productos.
}
// se exporta para ser usada en otra parte
module.exports = {
  getProducts
}
