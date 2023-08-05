/* Ejercicio 1
Dado el siguiente arreglo [1,2,3,4,5,6,7,8], imprimir los valores multiplicados por 3 y restados en 10. */

const respuesta1 = [];

const numeros = [1,2,3,4,5,6,7,8];

//1era forma

numeros.forEach((numero) => respuesta1.push(numero*3-10));
console.log(respuesta1)

//2da forma

const respuesta2 = numeros.map((numero) => numero*3-10);
console.log(respuesta2)

/* Ejercicio 2
Crear una lista desordenada en HTML con el siguieten arreglo ["Marcelo","Jorge","José","Linder"]. */

// Paso1: Obtener la lista creada en HTML
const lista = document.querySelector("#lista");

const personas = ["Marcelo","Jorge","José","Linder"]

personas.forEach((persona) => {
    lista.innerHTML += `<li>${persona}</li>`
})

/* Ejercicio 3
Debe realizar un script en JS, que le permita obtener el siguiente resultado. */

const profesores = [
{
    nombre: "Marcelo",
    edad: 20,
    email: "prueba1@mail.com",
},
{
    nombre: "Jorge",
    edad: 25,
    email: "prueba2@mail.com",
},
{
    nombre: "José",
    edad: 30,
    email: "prueb3@mail.com",
},
{
    nombre: "Marco",
    edad: 32,
    email: "prueba4@mail.com",
},
];

const listaProfes = document.querySelector(".lista-profes");

//vamos a crear una lista
const ul = document.createElement("ul");

profesores.filter((profesor) => profesor.nombre.startsWith("M")).map((profesor) => {
    const li = document.createElement("li");
    li.textContent = profesor.nombre;
    li.innerHTML += `
        <ul>
            <li>${profesor.edad}</li>
            <li>${profesor.email}</li>
        </ul>
    `;
    ul.append(li);
});

listaProfes.append(ul);