let carrito = localStorage.getItem('carrito') ? localStorage.getItem('carrito') : []

let desplegarCarrito = document.getElementById('carrito')

carrito.forEach((prod) => {
    const div = document.createElement('div')
    div.className = ('productoEnCarrito')
    div.innerHTML = `
    <p>${prod.nombre}</p>
    <p>Precio:$${prod.precio}</p>
    <p>Cantidad: <span id="cantidad">${prod.imagen}</span></p>
    <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `

    contenedorCarrito.appendChild(div)
    
    localStorage.setItem('carrito', JSON.stringify(carrito))

})




