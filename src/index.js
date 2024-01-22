//Importaciones
const mysql = require('mysql');
const express =require('express'); 
// const morgan =require('morgan');
const path =require('path');
// const cors =require('cors');
//Importar funcion para usar el motor de plantilla
const pug = require('pug'); 
const dotenv = require('dotenv');
const router = require('./routes/routes');

dotenv.config();

//Configuracion del servidor y variables
const server=express();
const port=3000;

//Configuracion de Middleware
// server.use(morgan('dev'));
//Ruta estatica
// server.use('/', express.static(path.join(__dirname, './html')));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
// server.use(cors());

//Implantar motor de plantillas - 
// server.engine('handlebars', engine());
// server.set('view engine', 'handlebars');
//Ruta estatica para los estilos
server.use(express.static(path.join(__dirname, './public')))

//localizacion de la plantilla
server.set('views', path.join(__dirname, './views'));
server.set('view engine', 'pug');

server.use('/', router);

//Rutas de los handlebars
// server.get('/', (req, res) => {
//   res.render('home', {
//     title: 'Antojitos Frit',
//     styles:[
//       'estilos',
//       'catalogo'
//     ]
// })
// })

// server.get('/registro', (req, res) => {
//   res.render('registro',{
//     styles: [
//     'estilos',
//     'inicio_usuario']
//   });
// })

// server.get('/catalogo', (req, res) => {
//   res.render('catalogo',{
//     styles:[
//       'estilos',
//       'catalogo'
//     ]
//   });
// })

// server.get('/iniciar_sesion', (req, res) => {
//   res.render('iniciar_sesion' ,{
//     styles: [
//     'estilos',
//     'inicio_usuario']
//   });
// })

// server.get('/vista_usuario', (req, res) => {
//   res.render('vista_usuario',{
//     styles: [
//     'estilos',
//     'usuario']
//   });
// })

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
              res.json({ mensaje: 'Usuario registrado exitosamente', resultado: result });
          }
      }
      )
  })

  //Escucha del servidor
  server.listen(port, ()=> {
    console.log(`\n Server is running on port ${port}`)
    console.log(`click here: http://localhost:${port}\n`)
})

