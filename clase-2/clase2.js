// teoria de la segunda clase silabuz unidad 7 javascript

/*
let nombre = "Linder"
nombre = "Lucas"

console.log(nombre)

var apellido = "Hassinger"
var apellido = "Perez"

console.log(apellido)

const fechaNacimiento = "1885-06-01"

console.log(fechaNacimiento)

function saludar() {
  console.log("apellido", apellido)
  let message = "Hola como estas"
}
*/

// cuando una variable se crea in prefijo es var
// a = 1

/*
asdasdsa
ad
sadasdasd
asdsa
*/

/*
saludar()

const edad = "20.5" // string
console.log(Number(edad)) // number
let direccion
console.log("direccion", typeof direccion)
const isActive = true || false
console.log("tipo function", typeof saludar)
console.log("is_active", isActive)

const numeros = {nombre:1, 2:2, 3:3, 4:4, 5:5, 6:6}
console.log(typeof numeros)


const fullName = "Linder Hassinger"
const user = {fullName}
console.log(user)
*/

// condiciones
const edad = 11
if (edad > 18) {
  console.log("Es mayor de edad")
} else {
  console.log("Es menor de edad")
}

if (edad === 18) {
  console.log("tiene 18")
} else if (edad === 15) {
  console.log("tiene 15")
} else {
  // template string
  console.log(`tiene ${edad}`)
}

const numeros1 = [1,1,1,1,1,1]
const condicion = numeros1.every(numero => numero === 1)
// operador ternario
message = condicion 
  ? "Todos son 1"
  : "Alguno es diferente"

console.log("message", message)

// switch
switch(edad) {
  case 1:
    console.log("tiene 1")
    break;
  case 2:
  case 3:
    console.log("tiene 2 o 3")
    break;
}

// funcion tradicional
function saludar(nombre) {
  return `Hola ${nombre} como estas`
}

saludar("Linder")

// funcion anonima 
const saludar2 = function (nombre) {
  return `Hola ${nombre} como estas`
}

saludar2("Juan")

// arrow function no se puede usar this
const saludar3 = (nombre) => {
  return `Hola ${nombre} como estas`
}

saludar3("Pepe")

// Esto soporta solo 1 linea
const saludar4 = (nombre) => `Hola ${nombre} como estas` 

saludar4("Lucha")

console.log(typeof saludar3)
console.log(typeof saludar4)
console.log(typeof saludar2)
console.log(typeof saludar)

// ejemplo de arrow function de ordenamiento
const numeros = [100, 2, 21, 1, 2, 1, 11, 87]

const ordenados = numeros.sort((a, b) => a - b)

console.log(ordenados)
