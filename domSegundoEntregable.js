let sector = []
let carrito = []

class Sectores{
  constructor(id,nombre,precio,imagen){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.imagen = imagen
  }
  desplegarSector(){
    const card = `
      <div class="card">
          <p>${this.nombre}</p>
          <div>
              <img class='imgProducto' src=${this.imagen} alt="foto del sector"/>
          </div>
          <div>
              <p>$${this.precio}</p>
          </div>
          <div class="btn-container">
              <button id=${this.id} class='btnAgregar'>AGRGEGAR AL CARRITO</button>
          </div>
      </div>
    `
    const container = document.getElementById('container')
    container.innerHTML += card
  }
  agregarEvento(){
      const btnAgregar = document.getElementById(this.id)
      const sectorEncontrado = sector.find(secto => secto.id == this.id)
      btnAgregar.addEventListener('click', () => agregarAlCarrito(sectorEncontrado))
  }    
}

let SectorEste = new Sectores (001, 'Popular Este', 2000, './multimedias/popularEste.jpg')
let SectorOeste = new Sectores (002, 'Popular Oeste', 2500, './multimedias/PopularOeste.jpg')
let SectorNorte = new Sectores (003, 'Platea Norte', 6500, './multimedias/PlateaNorteBaja.jpg')
let SectorSur = new Sectores (004, 'Platea Sur', 4700, './multimedias/PlateaSurBaja.jpg')
let SectorSurAlta = new Sectores (005, 'Platea Sur Alta', 3000, './multimedias/PlateaSurAlta.jpg')
let SectorVisitante = new Sectores (006, 'Visitante', 14500, './multimedias/sectorVisitantes.jpg')

sector.push(SectorEste, SectorOeste, SectorNorte, SectorSur, SectorSurAlta, SectorVisitante)

sector.forEach(e => {
  e.desplegarSector()
}) 
sector.forEach(e => {
  e.agregarEvento()
})

function agregarAlCarrito(Sectores) {

  let enCarrito = carrito.find(sect => sect.id == Sectores.id)
  
  if(!enCarrito){
      carrito.push({...Sectores, cantidad: 1})
  } else {
      let carritoFiltrado = carrito.filter(sect => sect.id != Sectores.id)
      carrito = [
          ...carritoFiltrado, 
          { ...enCarrito, cantidad: enCarrito.cantidad + 1}
      ]
  }

  contador.innerHTML =  carrito.reduce((acc, sect) => acc + sect.cantidad, 0)
  
}
const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, sect) => acc + sect.cantidad, 0)
sector.forEach((sector) => {
  const option = document.createElement('option')
  option.innerText = `${sector.nombre}: $${sector.precio}`
  option.setAttribute('id', `${sector.id}`)
  selectTag.append(option)
})



