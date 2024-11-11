const dotenv = require('dotenv')
const server = require('./config/server')
require('./database/db')

dotenv.config()

const port = process.env.PORT

// Escucha del servidor
server.listen(port, () => {
  console.log(`\nEl servidor se está ejecutando en el puerto ${port}`)
  console.log(`Haga clic aca: http://localhost:${port}\n`)
})
