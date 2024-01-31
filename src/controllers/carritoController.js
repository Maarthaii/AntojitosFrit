const {createUserCart} = require('../models/shoppingCart');
// const {enviarCarritoAlServidor} = require('../public/assets/js/catalogo');

module.exports=class CarritoController{
    
    async addCarts(req, res){

    

        const carrito = req.body;
        const total = req.body.total;

        const newCart = {
            productos: carrito,
            total: total
        }

        createUserCart(newCart)
        .then((savedCart)=>{
            if(savedCart){
                console.log('Se ha guardado la informacion del carrito de compras');
            res.render('catalogo',{
                styles: [
                    'estilos',
                    'usuario'
                ]
            })
            }
        })

        // console.log('Nuevo carrito:', newCart);
        // res.status(201).json({ mensaje: 'Carrito creado correctamente', carrito: savedCart });
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al procesar el carrito en el servidor' });
    }
}





















































// const ShoppingCart = require('../models/shoppingCart');

// class CarritoController {
//     async crearCarritoEnServidor(req, res) {
//         try {

//             // Obtén el ID de usuario desde la sesión
//             const userId = req.session.userId;

//             if (!userId) {
//                 // Manejar el caso cuando el usuario no está autenticado
//                 return res.status(401).json({ error: 'Usuario no autenticado' });
//             }

//             const { carrito } = req.body;

//             // Calcular el total del carrito
//             const total = carrito.reduce((sum, item) => sum + item.cantidad * item.precioUnitario, 0);

//             const newCart = new ShoppingCart({
//                 user: userId, // Ajusta según tu lógica de autenticación
//                 productos: carrito,
//                 total: total
//             });
//             console.log('Nuevo carrito:', newCart);

//             const savedCart = await newCart.save();

//             res.status(201).json({ mensaje: 'Carrito creado correctamente', carrito: savedCart });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Error al procesar el carrito en el servidor' });
//         }
//     }
// }

// module.exports = CarritoController;

