const { getProducts } = require('../models/products') // obtiene los productos disponibles en la tienda.
const { createUser, findUser, findUserById } = require('../models/user') // crea un nuevo usuario en la base de datos - busca un usuario basado en las credenciales - busca un usuario por ID

module.exports = class Controllers { // se define y exporta una clase de controlador que define los metodos para manejar diversas vistas y operaciones de usuario
  // metodo para redenrizar la vista de inicio de home
  renderHome (req, res) {
    const userId = req.session.userId // obtiene el userID de la sesion activa y envia al home.pug con el titulo, el user ID y las hojas de estilos
    res.render('home', {
      title: 'Antojitos Frit',
      userId,
      styles: [
        'estilos',
        'catalogo'
      ]
    })
  }
  // Objetivo: Renderiza la vista de la tienda (store), mostrando productos. Obtiene los productos mediante la función getProducts(), que retorna una lista de productos. Renderiza la vista store.pug, pasando el título, userId, los estilos y la lista de productos.

  renderStore (req, res) {
    const userId = req.session.userId
    getProducts()
      .then((products) => {
        res.render('store', {
          title: 'Antojitos Frit',
          userId,
          styles: [
            'estilos',
            'catalogo',
            'carrito'
          ],
          products
        })
      })
  }

  renderLogIn (req, res) {
    res.render('logIn', {
      title: 'Antojitos Frit',
      styles: [
        'estilos',
        'inicio_usuario'
      ]
    })
  }

  renderRegister (req, res) {
    res.render('register', {
      title: 'Antojitos Frit',
      styles: [
        'estilos',
        'inicio_usuario'
      ]
    })
  }

  // Objetivo: Renderiza la vista de perfil de usuario (userView). Si no hay userId en la sesión (el usuario no está autenticado), redirige al usuario a la vista de inicio de sesión (/logIn). Si el userId está presente, se busca el usuario en la base de datos usando findUserById, y luego se renderiza la vista userView.pug con el userId, el usuario encontrado y los estilos correspondientes.
  renderUserView (req, res) {
    const userId = req.session.userId

    if (userId === undefined || userId === null) {
      res.redirect('/logIn')
    } else {
      findUserById(userId)
        .then(user => {
          res.render('userView', {
            title: 'Antojitos Frit',
            userId,
            user,
            styles: [
              'estilos',
              'usuario'
            ]
          })
        })
    }
  }

  // Objetivo: Registra un nuevo usuario en el sistema. Recibe los datos del nuevo usuario desde el cuerpo de la solicitud (req.body). Llama a la función createUser para guardar los datos del usuario en la base de datos. Si el registro es exitoso, renderiza la vista de registro (register.pug) con un mensaje de éxito. Si ocurre un error, devuelve un error 500 con el mensaje del error.
  addUser (req, res) {
    const newUser = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password
    }

    createUser(newUser)
      .then(() => {
        console.log('Usuario registrado con éxito')
        const infoMessage = 'El usuario ha sido registrado exitosamente'
        res.render('register', {
          title: 'Antojitos Frit',
          styles: [
            'estilos',
            'inicio_usuario'
          ],
          infoMessage
        })
      })
      .catch((err) => {
        console.error('Error al registrar usuario:', err.message)
        res.status(500).send('Error al registrar usuario: ' + err.message)
      })
  }

  // Objetivo: Inicia sesión con las credenciales del usuario. Recibe el correo y la contraseña desde el cuerpo de la solicitud (req.body). Llama a la función findUser para buscar al usuario en la base de datos. Si se encuentra un usuario con las credenciales proporcionadas, se guarda el userId en la sesión y se redirige a la vista de perfil (/userView). Si no se encuentran las credenciales correctas, se muestra un mensaje de error en la vista de inicio de sesión.
  loginUser (req, res) {
    const user = {
      email: req.body.email,
      password: req.body.password
    }

    findUser(user)
      .then((foundUser) => {
        if (foundUser) {
          req.session.userId = foundUser.id
          res.redirect('/userView')
        } else {
          console.log('Los datos ingresados son incorrectos')
          const errorMessage = 'Credenciales Incorrectas'
          res.render('logIn', {
            title: 'Antojitos Frit',
            styles: [
              'estilos',
              'inicio_usuario'
            ],
            errorMessage
          })
          // res.status(401).send('Credenciales Incorrectas')
        }
      })
      .catch((err) => {
        console.log('Error al iniciar sesion', err)
        // res.status(500).send('Error: ' + err.message)
      })
  }
}
