
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

}
