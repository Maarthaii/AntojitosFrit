// Estado del carrito
let cartList = []

// eslint-disable-next-line no-unused-vars
const addToCart = (product) => {
  
  if (!cartList.some(item => item.product.id === product.id))
    cartList.push({ product, count: 1 })
  loadCart()
  showCart()
}

// eslint-disable-next-line no-unused-vars
function deleteItem (id) {
  cartList = cartList.filter(item => item.product.id !== id)
  loadCart()
}
// eslint-disable-next-line no-unused-vars
function addCount (id) {
  cartList = cartList.map(item =>
    item.product.id === id
      ? { ...item, count: item.count + 1 }
      : item
  )
  console.log(cartList)
  loadCart()
}
// eslint-disable-next-line no-unused-vars
function sustractCount (id) {
  cartList = cartList.map(item =>
    item.product.id === id
      ? { ...item, count: item.count - 1 }
      : item
  )
  loadCart()
}

function loadCart () {
  const container = document.getElementById('carrito-items')
  container.innerHTML = ''

  cartList.map((item) => {
    container.innerHTML += `
    <div class="carrito-item">
      <img class="img-en-carrito" src="${item.product.image}" width="80px" alt="">
      <div class="carrito-item-detalles">
      <span class="carrito-item-titulo">${item.product.title}</span>
      <div class="selector-cantidad">
      <i class="fa-solid fa-minus restar-cantidad" onclick="sustractCount('${item.product.id}')"></i>
              <input type="text" value="${item.count}" class="carrito-item-cantidad" disabled id="${'carrito-item-cantidad-' + item.id}">
              <i class="fa-solid fa-plus sumar-cantidad" onclick="addCount('${item.product.id}')"></i>
          </div>
          <span class="carrito-item-precio">${item.product.price}</span>
      </div>
      <button class="btn-eliminar" onclick="deleteItem('${item.product.id}')">
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

  fetch('/carritoController', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      products: cartList.map(({ product }) => ({...product, _id: product.id})),
      count: cartList.length
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log('Carrito enviado exitosamente al servidor:', data)
      //
      if (data.mensaje) {
        alert(data.mensaje)
      }
      cartList = []
      loadCart()
    })
    .catch(error => console.error('Error al enviar el carrito al servidor:', error))
})
