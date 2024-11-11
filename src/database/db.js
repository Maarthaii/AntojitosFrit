const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const db = process.env.MONGO_INITDB_ROOT_URL // obtine la url de las variables de entorno, donde esta la url de la base de datos

mongoose.connect(db)
  .then(() => console.log('Conexion exitosa a la base de datos'))
