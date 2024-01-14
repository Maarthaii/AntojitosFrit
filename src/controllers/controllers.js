
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

}
