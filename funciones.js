// lucas raboni
// aguante VELEZ viejo

let totalCompra = 0
let sectorSeleccionado = parseInt(prompt('Selecciona el sector del estadio que desee: 1. Popular Este - 2. Popular Oeste - 3. Platea Norte - 4. Platea Sur - 5. Platea Sur Alta - 6. Visitantes'))
let seguirComprando = true
let decision
let productos = []
let carrito = []

const popularEste = {
    nombre:'Popular Este',
    precio: 2000
  }
productos.push(popularEste)
const popularOeste = {
    nombre:'Popular Oeste',
    precio: 2500,
}
  productos.push(popularOeste)
  const plateaNorte = {
    nombre:'Platea Norte',
    precio: 6500
}
productos.push(plateaNorte)
const plateaSur = {
    nombre:'Platea Sur',
    precio: 4700
}
productos.push(plateaSur)
const plateaSurAlta = {
    nombre: 'Platea Sur Alta',
    precio: 3000
}
productos.push(plateaSurAlta)
const visitantes = {
    nombre: 'Visitantes',
    precio: 14500
}
productos.push(visitantes)

console.log(productos)

while(seguirComprando === true){
if(sectorSeleccionado === 1) {
    carrito.push(productos[0])
} else if(sectorSeleccionado === 2) {
    carrito.push(productos[1])
}else if(sectorSeleccionado === 3) {
    carrito.push(productos[2])
}else if(sectorSeleccionado === 4) {
    carrito.push(productos[3])
}else if(sectorSeleccionado === 5) {
    carrito.push(productos[4])
}else if(sectorSeleccionado === 6) {
    carrito.push(productos[5])
    alert('El sector visitante abona un impuesto')
} else{
    sectorSeleccionado = parseInt(prompt('Sector no valido, por favor ingrese un sector existente: 1. Popular Este - 2. Popular Oeste - 3. Platea Norte - 4. Platea Sur - 5. Platea Sur Alta - 6. Visitantes'))
    continue
}

decision = parseInt(prompt('Desea comprar otra entrada? 1.Si - 2.No'))
if (decision === 1) {
    sectorSeleccionado = parseInt(prompt('Selecciona el sector del estadio que desee: 1. Popular Este - 2. Popular Oeste - 3. Platea Norte - 4. Platea Sur'))
} else if (decision === 2) {
    seguirComprando = false
}
}

console.log(carrito)

for(let i=0;i<carrito.length;i++){
    totalCompra = totalCompra +carrito[i].precio
}

for (const prod of carrito) {
    totalCompra = totalCompra +prod.precio
}


alert('El precio de las entradas es: ' +totalCompra)

function calcularDescuentoDeSocios(valor){
let descuentoSocios = 0
if(valor<=2000){
    descuentoSocios = 30
} else if(valor>2000 && valor<=3000){
    descuentoSocios = 45
} else if(valor>3000 && valor<=4700){
    descuentoSocios = 55
} else if(valor>4700 && valor<=6500){
    descuentoSocios = 60
} else {
    descuentoSocios = 35
}
let valorDescuentoSocios = valor *(descuentoSocios/100)
valor = valor - valorDescuentoSocios
return valor
}

let valorConDescuentoSocios = calcularDescuentoDeSocios(totalCompra)
alert('Total con descuentos siendo socios es: ' +valorConDescuentoSocios)


