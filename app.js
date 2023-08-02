const n1=10;
const n2=20;

console.log(n1+n2);


// Problema 2

const numero = 100; //Number(prompt("Ingrese un número"));

const message = numero % 2 === 0 ? `Par y el número ingresado es ${numero}` : `Impar y el número ingresado es ${numero}`;

console.log(message);


/* Problema 4 
Dada la matriz, [[1,2,3],[4,5,6],[7,8,9]], calcule el promedio de la diagonal principal. Hint: Los 3 elementos de la diagonal son 1,5,9. */

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// 1era forma
let suma = 0

matriz.forEach((numero, index) => suma += matriz[index][index])
// length retorna la cantidad de elementos
console.log("Solución1", suma / matriz.length)

// 2da forma
let suma2 = 0

for (let i = 0; i < matriz.length; i++){
    suma2 += matriz[i][i]
}

console.log("Solución2", suma2 / matriz.length)

// 3era forma
let suma3 = 0;
let count = matriz.length;

matriz.forEach((_) => {
    suma3 += matriz[count-1][count-1]
    count--
})

console.log("Solución3", suma3 / matriz.length)


/* Problema 5
Dada la siguiente lista ["Hola", "Amigos", "Hoy", True] , escriba un programa que pida al usuario una palabra, dicha palabra debe ser agregada al final y al inicio de la lista. */

const palabras = ["Hola", "Amigos", "Hoy", true];
const nuevaPalabra = "test" //prompt("Escribe una palabra");
palabras.push(nuevaPalabra)

console.log(palabras)


/* Problema 6
Dada una lista de números enteros [15,20,50,80,40,60], escriba un programa que dado un dato por el usuario, este sea eliminado de la lista. Tome en cuenta que el usuario ingresará datos que se encuentran dentro de la lista */

const numeros = [15,20,50,80,40,60]
const numeroPorUsuario = 15

//filter retorna un array
// 1era forma
const resultado = numeros.filter(function(numero) {
    if (numero !== numeroPorUsuario){
        return numero
    }
})
console.log("Solución 1", resultado)

// 2da forma

const resultado2 = numeros.filter(numero => numero !== numeroPorUsuario)
console.log("Solución 2", resultado2)


/* Problema 7
Dado el siguiente arreglo de números [1,3,5,2,7,5,5,8,4,8,4,8,4], escriba un programa que dado un elemento por el usuario, imprima el número de veces que se encuentra en el arreglo. */

// 1era forma
const listaNumeros= [1,3,5,2,7,5,5,8,4,8,4,8,4]
const elementoPorUsuario = 7
let contador = 0

for (let i=0; i<listaNumeros.length;i++){
    if(listaNumeros[i] === elementoPorUsuario){
        contador++  
    }
}

console.log("Solución 1", contador)


// 2da forma
const contador2 = listaNumeros.filter(numero => numero === elementoPorUsuario)

console.log("Solución 2", contador2.length)


// 3era forma
let contador3 = 0
listaNumeros.forEach(numero => {
    if (numero === elementoPorUsuario){
        contador3++
    }
})

console.log("Solución 3", contador3)


/* Problema 8
Dado el siguiente objeto que almacena la talla de algunas personas {'Marcelo': 1.80, 'José':1.50, 'Oscar':1.70, 'Jorge': 1.40}, escriba un programa que dado un nombre ingresado por el usuario imprime la talla. */

const user = {
    name: "Linder",
    last_name: "Hassinger",
    salary: 1,
    address: "Av siempre viva"
}
  
console.log(user.name)
console.log(user["name"])

const tallas = {Marcelo: 1.80, Jose:1.50, Oscar:1.70, Jorge: 1.40}

console.log(Object.entries(tallas))
console.log(Object.values(tallas))
console.log(Object.keys(tallas))

const busqueda = 1.4
let resultadoBusqueda = ""

Object.entries(tallas).forEach(([key, value]) => {
    if (value === busqueda) resultadoBusqueda = key
})

console.log(resultadoBusqueda)


/* Problema 10
Guarde los datos de una persona (nombre,apellido,edad) en un diccionario, luego imprimalo en el siguiente formato. "Hola mi nombre es [nombre] [apellido], y tengo [edad] años". */

const user1 = {}
const nombre = prompt("Ingresa tu nombre")
const apellido = prompt("Ingresa tu apellido")
const edad = prompt("Ingresa tu edad")
user1.nombre = nombre
user1.apellido = apellido
user1.edad = edad
user1["direccion"] = "Av. siempre viva"

console.log(user1)
console.log(`Hola mi nombre es ${user1.nombre} ${user1.apellido}, y tengo ${user1.edad} años`)