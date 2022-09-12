let sector = []

const selectTag = document.getElementById('lista')

const popularEste = {
    id: 1,
    nombre:'Popular Este',
    precio: 2000
  }
sector.push(popularEste)
const popularOeste = {
    id: 2,
    nombre:'Popular Oeste',
    precio: 2500,
}
  sector.push(popularOeste)
  const plateaNorte = {
    id: 3,
    nombre:'Platea Norte',
    precio: 6500
}
sector.push(plateaNorte)
const plateaSur = {
    id: 4,
    nombre:'Platea Sur',
    precio: 4700
}
sector.push(plateaSur)
const plateaSurAlta = {
    id: 5,
    nombre: 'Platea Sur Alta',
    precio: 3000
}
sector.push(plateaSurAlta)
const visitantes = {
    id: 6,
    nombre: 'Visitantes',
    precio: 14500
}
sector.push(visitantes)

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