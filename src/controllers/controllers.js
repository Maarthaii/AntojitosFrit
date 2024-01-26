const {createUser} = require('../models/user');
module.exports=class Controllers{

    renderHome(req, res){
        res.render('home', {
            title: 'Antojitos Frit',
            styles:[
                'estilos',
                'catalogo'
            ]
        });
    }

    renderCatalogo(req, res){
        res.render('catalogo',{
            styles:[
                'estilos',
                'catalogo'
            ]
        });
    }

    renderIniciarSesion(req, res){
        res.render('iniciar_sesion', {
            styles: [
                'estilos',
                'inicio_usuario'
            ]
        });
    }

    renderRegistro(req, res){
        res.render('registro',{
            styles: [
                'estilos',
                'inicio_usuario'
            ]
        });
    }

    renderVistaUsuario(req, res){
        res.render('vista_usuario',{
            styles: [
                'estilos',
                'usuario'
            ]
        });
    }

async addUser(req, res) {
    const newUser = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        contraseña: req.body.contraseña
    };

    try {
        await createUser(newUser);
        console.log('Usuario registrado con éxito');
        res.redirect('/registro');

    } catch (err) {
        console.error('Error al registrar usuario:', err.message);
        res.status(500).send('Error al registrar usuario: ' + err.message);
    }
}

}