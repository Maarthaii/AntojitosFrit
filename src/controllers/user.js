const { getProducts } = require('../models/products')
const { createUser, findUser, findUserById } = require('../models/user')

module.exports = class Controllers {
  renderHome (req, res) {
    const userId = req.session.userId

    res.render('home', {
      title: 'Antojitos Frit',
      userId,
      styles: [
        'estilos',
        'catalogo'
      ]
    })
  }

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
