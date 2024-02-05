const { getProducts } = require('../models/products')
const { createUser, findUser, findUserById } = require('../models/user')

module.exports = class Controllers {
  renderHome (req, res) {
    res.render('home', {
      title: 'Antojitos Frit',
      styles: [
        'estilos',
        'catalogo'
      ]
    })
  }

  renderStore (req, res) {
    getProducts()
      .then((products) => {
        res.render('store', {
          title: 'Antojitos Frit',
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

    if (userId === undefined) {
      res.render('logIn', {
        title: 'Antojitos Frit',
        styles: [
          'estilos',
          'inicio_usuario'
        ]
      })
    } else {
      findUserById(userId)
        .then(user => {
          res.render('userView', {
            title: 'Antojitos Frit',
            styles: [
              'estilos',
              'usuario'
            ]
          })
        })
    }
  }

  // renderLogout (req, res) {
  //   req.session.destroy((err) => {
  //     if ((err)) {
  //       console.log('Ha ocurrido un error al cerrar sesion ', err)
  //       res.status(500).send('Error al cerrar sesion')
  //     } else {
  //       res.render('logout', {
  //         title: 'Antojitos Frit',
  //         styles: [
  //           'estilos',
  //           'usuario'
  //         ]
  //       })
  //     }
  //   })
  // }

  // renderLogout (req, res) {
  //   req.session.destroy()
  //   res.status(200).send('ok')
  // }

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
        res.redirect('register')
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
          console.log(foundUser)
          req.session.userId = foundUser.id
          res.render('userView', {
            user: foundUser,
            styles: [
              'estilos',
              'usuario'
            ]
          })
        } else {
          console.log('Los datos ingresados son incorrectos')
          res.status(401).send('Credenciales Incorrectas')
        }
      })
      .catch((err) => {
        console.log('Error al iniciar sesion', err)
        res.status(500).send('Error: ' + err.message)
      })
  }
}
