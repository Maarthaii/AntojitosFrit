const dotenv = require('dotenv');
const server = require('./config/server');

dotenv.config();

const port = process.env.PORT;

  //Escucha del servidor
  server.listen(port, ()=> {
    console.log(`\n Server is running on port ${port}`)
    console.log(`click here: http://localhost:${port}\n`)
})

