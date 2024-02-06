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
