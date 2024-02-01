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

  renderCatalogo (req, res) {
    res.render('catalogo', {
      styles: [
        'estilos',
        'catalogo',
        'carrito'
      ]
    })
  }

  renderIniciarSesion (req, res) {
    res.render('iniciar_sesion', {
      styles: [
        'estilos',
        'inicio_usuario'
      ]
    })
  }

  renderRegistro (req, res) {
    res.render('registro', {
      styles: [
        'estilos',
        'inicio_usuario'
      ]
    })
  }

  renderVistaUsuario (req, res) {
    res.render('vista_usuario', {
      styles: [
        'estilos',
        'usuario'
      ]
    })
  }

  async addUser (req, res) {
    const newUser = {
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      correo: req.body.correo,
      contraseña: req.body.contraseña
    }

    try {
      await createUser(newUser)
      console.log('Usuario registrado con éxito')
      res.redirect('registro')
    } catch (err) {
      console.error('Error al registrar usuario:', err.message)
      res.status(500).send('Error al registrar usuario: ' + err.message)
    }
  }

  loginUser (req, res) {
    const user = {
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      correo: req.body.correo,
      contraseña: req.body.contraseña
    }

    findUser(user)
      .then((foundUser) => {
        if (foundUser) {
          // if (req.session) {
          //     req.session.userId = foundUser._id;

          console.log('Has iniciado sesion con exito')
          res.render('vista_usuario', {
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
