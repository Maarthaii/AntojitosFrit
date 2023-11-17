//Importaciones
const mysql = require('mysql');
const express =require('express'); 
const morgan =require('morgan');
const path =require('path');
const cors =require('cors');

//Configuracion del servidor y variables
const server=express();
const port=3000;

//Configuracion de Middleware
server.use(morgan('dev'));
server.use('/', express.static(path.join(__dirname, './html')));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cors());

//Conexion con la base de datos
const entity = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '30888898Liyi',
    port: '3306',
    database: 'antojitosfrit'
  })

  //Rutas y manejo de solicitudes
  server.post('/cliente', (req, res) => {
    
    const { id_cliente, nombreCliente, telefonoCliente, correoCliente} = req.body;

    entity.query(
        "INSERT INTO cliente ( id_cliente, nombreCliente, telefonoCliente, correoCliente ) VALUES (?, ?, ?, ?)", 
        [ id_cliente, nombreCliente, telefonoCliente, correoCliente ],

        (err, result) => {
          if (err) {
              console.error('Error al ejecutar la consulta SQL:', err);
              res.status(500).send('Error al insertar en la base de datos');
          } else {

           
              console.log('El usuario ha sido registrado de manera existosa:', result);
             // res.json({ mensaje: 'Usuario registrado exitosamente', resultado: result });
          }
      }
      )
  })

  //Escucha del servidor
  server.listen(port, ()=> {
    console.log(`\n Server is running on port ${port}`)
    console.log(`click here: http://localhost:${port}\n`)
})