let sector = []

const selectTag = document.getElementById('lista')

class Sectores{
    constructor(id,nombre,precio,imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let SectorEste = new Sectores (1,"Popular Este",2000)
let SectorOeste = new Sectores (2,"Popular Oeste",2500)
let SectorNorte = new Sectores (3,"Platea Norte",6500)
let SectorSur = new Sectores (4,"Platea Sur",4700)
let SectorSurAlta = new Sectores (5,"Platea Sur Alta",3000)
let SectorVisitante = new Sectores (5,"Visitante",14500)
sector.push (SectorEste)
sector.push (SectorOeste)
sector.push (SectorNorte)
sector.push (SectorSur)
sector.push (SectorSurAlta)
sector.push (SectorVisitante)


console.log(sector)

sector.forEach((sector) => {
  const option = document.createElement('option')
  option.innerText = `${sector.nombre}: $${sector.precio}`
  option.setAttribute('id', `${sector.id}`)
  selectTag.append(option)
})

let carrito = []

const boton = document.createElement('button')
boton.innerText = 'SEGUIR COMPRANDO'
document.body.append(boton)

const boton2 = document.createElement('button')
boton2.innerText = 'TERMINAR COMPRA'
document.body.append(boton2)

boton.onclick = () => {
  const sectorSeleccionado = sector[selectTag.selectedIndex]
  carrito.push(sectorSeleccionado)
}

boton2.onclick = () => {
  console.log(carrito)
  let totalCompra = 0
  carrito.forEach((sect) => {
    totalCompra = totalCompra + sect.precio
  })

  const p = document.createElement('p')
  p.innerText = `El precio total a pagar es ${totalCompra}`
  document.body.append(p)
}