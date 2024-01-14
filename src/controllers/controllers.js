
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
}
