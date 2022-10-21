let carrito = JSON.parse(localStorage.getItem('carrito')) ? JSON.parse(localStorage.getItem('carrito')) : []
let desplegarCarrito = document.getElementById('carrito')
let precioTotal = document.querySelector('#precio')
let botonVaciar = document.getElementById('carrito')
console.log(carrito)

carrito.forEach((prod) => {
    const {nombre, precio, imagen, id, cantidad} = prod 
    console.log(nombre)
      const div = document.createElement('div')
      div.className = ('productoEnCarrito')
      div.innerHTML = `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${imagen}" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text"> Cantidad: ${cantidad}</p>
      <button class="delete btn btn-danger">Borrar</button>  
      </div>
      `


     desplegarCarrito.appendChild(div)
     console.log(desplegarCarrito)
    
     localStorage.setItem('carrito', JSON.stringify(carrito))
     const precioSuma =  carrito.reduce((acc, prod) => acc + cantidad * prod.precio, 0)
    precioTotal.textContent = precioSuma 

})

