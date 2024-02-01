// Estado del carrito
let cartList = []

// Lista de productos
const itemsList = [
  {
    id: 0,
    titulo: 'Tequeño 1',
    precio: 15000,
    descripcion: 'Descripción',
    imagenSrc: '/assets/img/tequeño.jpg'
  }, {
    id: 1,
    titulo: 'Tequeño 2',
    precio: 15000,
    descripcion: 'Descripción',
    imagenSrc: '/assets/img/tequeño.jpg'
  }, {
    id: 2,
    titulo: 'Tequeño 3',
    precio: 15000,
    descripcion: 'Descripción',
    imagenSrc: '/assets/img/tequeño.jpg'
    
  }, {
    id: 3,
    titulo: 'Tequeño 4',
    precio: 15000,
    descripcion: 'Descripción',
    imagenSrc: '/assets/img/tequeño.jpg'
    
  }, {
    id: 4,
    titulo: 'Tequeño 5',
    precio: 15000,
    descripcion: 'Descripción',
    imagenSrc: '/assets/img/tequeño.jpg'
    
  }, {
    id: 5,
    titulo: 'Tequeño 6',
    precio: 15000,
    descripcion: 'Descripción',
    imagenSrc: '/assets/img/tequeño.jpg'
    
  }, {
    id: 6,
    titulo: 'Tequeño 7',
    precio: 15000,
    descripcion: 'Descripción',
    imagenSrc: '/assets/img/tequeño.jpg'
    
  }, {
    id: 7,
    titulo: 'Tequeño 8',
    precio: 15000,
    descripcion: 'Descripción',
    imagenSrc: '/assets/img/tequeño.jpg'
  }, {
    id: 8,
    titulo: 'Tequeño 9',
    precio: 15000,
    descripcion: 'Descripción',
    imagenSrc: '/assets/img/tequeño.jpg'
  }
]

const container = document.getElementById('contenedor-items')
itemsList.map(item => {
  container.innerHTML += `
      <div class="item">
          <img src="${item.imagenSrc}" alt="" class="img-item">
          <span class="titulo-item">${item.titulo}</span>
          <span class="precio-item">$${item.precio}</span>
          <span class="descripcion-item"><p>${item.descripcion}</p></span>
          <button class="boton-item" onclick="addToCart('${item.id}')">Agregar al Carrito</button>
      </div>
  `
  return undefined
})

// eslint-disable-next-line no-unused-vars
const addToCart = (id) => {
  if (!cartList.some(item => item.id === id)) cartList.push({ id, count: 1 })

  // if (carrito.length === 0 || carrito.every(item => item.id != id)) {
  //   const item = itemsList.find(item => item.id == id)
  //   agregarItemAlCarrito(item)
  //   carrito.push(item)
  // } else sumarCantidad(id)
  loadCart()
  showCart()
}

// eslint-disable-next-line no-unused-vars
function deleteItem (id) {
  cartList = cartList.filter(item => item.id !== id)
  loadCart()
}
// eslint-disable-next-line no-unused-vars
function addCount (id) {
  cartList = cartList.map(item =>
    item.id === id
      ? { ...item, count: item.count + 1 }
      : item
  )
  console.log(cartList)
  loadCart()
}
// eslint-disable-next-line no-unused-vars
function sustractCount (id) {
  cartList = cartList.map(item =>
    item.id === id
      ? { ...item, count: item.count - 1 }
      : item
  )
  console.log(cartList)
  loadCart()
}

function loadCart () {
  const container = document.getElementById('carrito-items')
  container.innerHTML = ''

  cartList.map((item) => {
    container.innerHTML += `
    <div class="carrito-item">
      <img class="img-en-carrito" src="${itemsList[item.id].imagenSrc}" width="80px" alt="">
      <div class="carrito-item-detalles">
      <span class="carrito-item-titulo">${itemsList[item.id].titulo}</span>
      <div class="selector-cantidad">
      <i class="fa-solid fa-minus restar-cantidad" onclick="sustractCount('${item.id}')"></i>
              <input type="text" value="${item.count}" class="carrito-item-cantidad" disabled id="${'carrito-item-cantidad-' + item.id}">
              <i class="fa-solid fa-plus sumar-cantidad" onclick="addCount('${item.id}')"></i>
          </div>
          <span class="carrito-item-precio">${itemsList[item.id].precio}</span>
      </div>
      <button class="btn-eliminar" onclick="deleteItem('${item.id}')">
          <i class="fa-solid fa-trash"></i>
      </button>
    </div>
    `
    return undefined
  })

  if (container.childNodes.length === 0) hiddeCart()
}

// Funcion que hace visible el carrito
function showCart () {
  document.getElementById('carrito').classList.add('show')
}
// Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function hiddeCart () {
  // if (carritoItems.childElementCount == 0) {
  document.getElementById('carrito').classList.remove('show')
  // }
}

document.getElementById('btn-pagar').addEventListener('click', () => {
  alert('Gracias por su compra')
  document.getElementById('carrito-items').innerHTML = ''
  loadCart()

  fetch('/carritoController', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      products: cartList.map(product => ({ price: itemsList[product.id].precio, _id: product.id, name: itemsList[product.id].titulo })),
      count: cartList.length
    })
  })
    .then(response => {
      console.log('Respuesta del servidor:', response)
      return response.json()
    })
    // .then(response => response.json())
    .then(data => {
      console.log('Carrito enviado exitosamente al servidor:', data)
      //
      if (data.mensaje) {
        alert(data.mensaje)
      }
    })
    .catch(error => {
      console.error('Error al enviar el carrito al servidor:', error)
      alert('Error al procesar el carrito en el servidor')
    })
})
