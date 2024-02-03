const schema = require('./schema/products')

const getProducts = async () => {
  return await schema.find()
}

module.exports = {
  getProducts
}
