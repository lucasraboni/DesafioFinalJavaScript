let carrito = [];
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actualizarCarrito();
  }
});
let desplegarCarrito = document.getElementById("carrito");
let precioTotal = document.querySelector("#precio");
let botonVaciar = document.getElementById("carrito");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const comprarTickets = document.querySelector("#comprarTickets");
const cartCounter = document.querySelector("#cartCounter");

vaciarCarrito.addEventListener("click", () => {
  carrito.length = [];
  actualizarCarrito();
  guardarStorage();
  arreglarStorage();
});

comprarTickets.addEventListener("click", () => {
  Swal.fire({
    title: "Exelente",
    text: "Compra finalizada con exitos",
    icon: "success",
    background: "#1a75b7",
    iconColor: "white",
    color: "white",
    showCancelButton: false,
    showConfirmButton: false,
    timer: 5000,
  });
});
function actualizarCarrito() {
  desplegarCarrito.innerHTML = "";

  carrito.forEach((prod) => {
    const { nombre, precio, imagen, id, cantidad } = prod;
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.innerHTML = `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${imagen}" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text"> Cantidad: ${cantidad}</p>
      <button class="delete btn btn-color" onclick=borrarProducto(${id})>Borrar</button>  
      </div>
      `;

    desplegarCarrito.appendChild(div);

    guardarStorage();
    const precioSuma = carrito.reduce(
      (acc, prod) => acc + cantidad * prod.precio,
      0
    );
    if (carrito.length === 0) {
      precioTotal.innerHTML = `<p>No hay elementos</p>`;
    } else {
      precioTotal.innerHTML = `El precio total es ${precioSuma}`;
    }
  });
}

function borrarProducto(id) {
  carrito = carrito.filter((producto) => producto.id !== id);
  actualizarCarrito();
  guardarStorage();
  arreglarStorage();
}

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function arreglarStorage() {
  if (carrito.length === 0) {
    localStorage.clear();
  }
}