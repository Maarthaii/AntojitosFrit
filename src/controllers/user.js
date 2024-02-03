const { getProducts } = require('../models/products')
const { createUser, findUser } = require('../models/user')

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
    res.render('userView', {
      title: 'Antojitos Frit',
      styles: [
        'estilos',
        'usuario'
      ]
    })
  }

  async addUser (req, res) {
    const newUser = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password
    }

    try {
      await createUser(newUser)
      console.log('Usuario registrado con éxito')
      res.redirect('register')
    } catch (err) {
      console.error('Error al registrar usuario:', err.message)
      res.status(500).send('Error al registrar usuario: ' + err.message)
    }
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
          res.render('userView', {
            user: foundUser,
            styles: [
              'estilos',
              'usuario'
            ]
          })
        // }
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
