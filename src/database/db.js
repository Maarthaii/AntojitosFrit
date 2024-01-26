const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db = process.env.MONGO_INITDB_ROOT_URL;

mongoose.connect(db)
.then(()=> console.log('Conexion exitosa'));