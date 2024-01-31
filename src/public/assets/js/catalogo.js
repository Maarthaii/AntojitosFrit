
// Estado del carrito
let carrito = []

// Lista de productos
const itemsList = [
    {
        id: 1,
        titulo: 'Tequeño 1',
        precio: 15000,
        descripcion: 'Descripción',
        imagenSrc:"/assets/img/tequeño.jpg"

    },{
        id: 2,
        titulo: 'Tequeño 2',
        precio: 15000,
        descripcion: 'Descripción',
        imagenSrc: "/assets/img/tequeño.jpg"

    },{
        id: 3,
        titulo: 'Tequeño 3',
        precio: 15000,
        descripcion: 'Descripción',
        imagenSrc: "/assets/img/tequeño.jpg"

    },{
        id: 4,
        titulo: 'Tequeño 4',
        precio: 15000,
        descripcion: 'Descripción',
        imagenSrc: "/assets/img/tequeño.jpg"

    },{
        id: 5,
        titulo: 'Tequeño 5',
        precio: 15000,
        descripcion: 'Descripción',
        imagenSrc: "/assets/img/tequeño.jpg"

    },{
        id: 6,
        titulo: 'Tequeño 6',
        precio: 15000,
        descripcion: 'Descripción',
        imagenSrc: "/assets/img/tequeño.jpg"

    },{
        id: 7,
        titulo: 'Tequeño 7',
        precio: 15000,
        descripcion: 'Descripción',
        imagenSrc:"/assets/img/tequeño.jpg"

    },{
        id: 8,
        titulo: 'Tequeño 8',
        precio: 15000,
        descripcion: 'Descripción',
        imagenSrc:"/assets/img/tequeño.jpg"

    },{
        id: 9,
        titulo: 'Tequeño 9',
        precio: 15000,
        descripcion: 'Descripción',
        imagenSrc: "/assets/img/tequeño.jpg"

    },
]

//Funcion que hace visible el carrito
function hacerVisibleCarrito(){
    document.getElementById('carrito').classList.add('show')
}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    if(carritoItems.childElementCount==0){
        document.getElementById('carrito').classList.remove('show')
    }
}

// Renderiza los elementos en el itemsList
function cargarCatalogo () {
    const container = document.getElementById('contenedor-items')
    itemsList.map( (item) => {

        container.innerHTML += `
        <div class="item">
            <img src="${item.imagenSrc}" alt="" class="img-item">
            <span class="titulo-item">${item.titulo}</span>
            <span class="precio-item">$${item.precio}</span>
            <span class="descripcion-item"><p>${item.descripcion}</p></span>
            <button class="boton-item" onclick="agregarAlCarritoClicked('${item.id}')">Agregar al Carrito</button>
        </div>
    `
    })

}

//Funciòn que agrega un item al carrito
function agregarItemAlCarrito(data){
    // if ( carrito.some(item => item.id == id)) return null
    // else carrito.push(data)

    let item = document.createElement('div');
    item.id = 'carrito-item-' + data.id;

    item.innerHTML = `
        <div class="carrito-item">
            <img class="img-en-carrito" src="${data.imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${data.titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad" id="restar-cantidad-${data.id}"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled id="${'carrito-item-cantidad-'+data.id}">
                    <i class="fa-solid fa-plus sumar-cantidad" id="sumar-cantidad-${data.id}"></i>
                </div>
                <span class="carrito-item-precio">${data.precio}</span>
            </div>
            <button class="btn-eliminar" id="${'btn-eliminar-'+data.id}">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    let carrito_items = document.getElementById('carrito-items')
    carrito_items.appendChild(item)

    document.getElementById(('restar-cantidad-'+data.id))
    .addEventListener('click', () => restarCantidad(data.id))

    document.getElementById(('sumar-cantidad-'+data.id))
    .addEventListener('click', () => sumarCantidad(data.id))

    document.getElementById(('btn-eliminar-'+data.id))
    .addEventListener('click', () => eliminarItemCarrito(data.id))

//Actualizar total
actualizarTotalCarrito();
}


//Cargar los documentos
if (document.readyState == 'loading') document.addEventListener('DOMContentLoaded', ready)
else ready();


function ready(){
    // Renderiza los poductos cuando estén listos
    cargarCatalogo()
    //Hacer funcional el boton de comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}

//Eliminar todos los elementos del carrito y ocultar
function pagarClicked(){
    alert("Gracias por su compra");
    //Eliminar todos los elementos del carrito
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    // Mantiene el estado del carrito
    carrito = []
    actualizarTotalCarrito();
    ocultarCarrito();
}

//Funciòn que controla el boton clickeado de agregar al carrito
function agregarAlCarritoClicked(id){

    if (carrito.length == 0 || carrito.every(item => item.id != id)) {

        const item = itemsList.find(item => item.id == id)
        agregarItemAlCarrito(item)
        carrito.push(item)

    } else sumarCantidad(id)

    hacerVisibleCarrito();
}



//Aumentar en uno la cantidad del elemento seleccionado
function sumarCantidad(id){
    let cantidadActual = document.getElementById(`carrito-item-cantidad-${id}`).value
    cantidadActual++;
    document.getElementById(`carrito-item-cantidad-${id}`).value = cantidadActual;
    actualizarTotalCarrito();
}
//Restar en uno la cantidad del elemento seleccionado
function restarCantidad(id){
    let cantidadActual = document.getElementById(`carrito-item-cantidad-${id}`).value
    cantidadActual--;
    if(cantidadActual < 1) document.getElementById(`carrito-item-cantidad-${id}`).value = 1
    else document.getElementById(`carrito-item-cantidad-${id}`).value = cantidadActual
    actualizarTotalCarrito();
}

//Eliminar el item seleccionado del carrito
function eliminarItemCarrito(id){

    let buttonClicked = document.getElementById(`carrito-item-${id}`);
    buttonClicked.remove();
    //Actualizar el total del carrito
    actualizarTotalCarrito();
    carrito = carrito.filter(item => item.id !== id)

    // controlar si hay elementos en el carrito
    //Si no hay eliminar el carrito
    ocultarCarrito();
}
//Actualizar el total de Carrito
function actualizarTotalCarrito(){
    //seleccionar el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    //recorrer cada elemento del carrito para actualizar el total
    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        //quitar el simbolo peso y el punto de milesimos.
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") + ",00";
    
}

// 'carrito' contiene la información del carrito a enviar al servidor
function enviarCarritoAlServidor() {
    fetch('/catalogo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ carrito }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Carrito enviado exitosamente al servidor:', data);
        // 
        if (data.mensaje) {
            alert(data.mensaje);
        }
    
    })
    .catch(error => {
        console.error('Error al enviar el carrito al servidor:', error);
        alert('Error al procesar el carrito en el servidor');
    });
}


document.getElementById('btn-pagar').addEventListener('click', () => {

    enviarCarritoAlServidor();
});













// function enviarCarritoAlServidor() {
//     fetch('/catalogo', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ carrito }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Carrito enviado exitosamente al servidor:', data);
//         // Puedes realizar acciones adicionales si es necesario
//         if (data.mensaje) {
//             alert(data.mensaje);
//         }
    
//     })
//     .catch(error => {
//         console.error('Error al enviar el carrito al servidor:', error);
//         alert('Error al procesar el carrito en el servidor');
//     });
// }

// //  botón con el id 'btn-pagar'
// document.getElementById('btn-pagar').addEventListener('click', () => {
//     // Realizar acciones adicionales si es necesario
//     enviarCarritoAlServidor();
// });

