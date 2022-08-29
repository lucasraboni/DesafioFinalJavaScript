// lucas raboni
// aguante VELEZ viejo

let totalCompra = 0
let sectorSeleccionado = parseInt(prompt('Selecciona el sector del estadio que desee: 1. Popular Este - 2. Popular Oeste - 3. Platea Norte - 4. Platea Sur - 5. Platea Sur Alta - 6. Visitantes'))
let seguirComprando = true
let decision

while(seguirComprando===true){
if(sectorSeleccionado===1){
    totalCompra = totalCompra + 2000
} else if(sectorSeleccionado===2){
    totalCompra = totalCompra + 2500
}else if(sectorSeleccionado===3){
    totalCompra = totalCompra + 6500
}else if(sectorSeleccionado===4){
    totalCompra = totalCompra + 4700
}else if(sectorSeleccionado===5){
    totalCompra = totalCompra + 3000
}else if(sectorSeleccionado===6){
    totalCompra = totalCompra + 14500
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


