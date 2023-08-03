// array methods
const alumnos = ["Pepe", "Miguel", "Renato", "Maria", "Marie", "Flavio"]

// forEach
// que para poder usar las siguienes funciones
/*
forEach: no retorna nada
map
filter
find
findInex
every
some
fill
reduce
reduceRight
*/

// nuestra variable debe ser un array
// funcion tradicional
alumnos.forEach(function (alumno, i) {
    console.log(alumno, i)
})


// arrow function
alumnos.forEach((alumno, i) => {
  console.log(alumno, i)
})


// map : modifica y crea un nuevo array

const iteracion = alumnos.map(function(alumno, indice){
    return `${indice+1} ${alumno}`
})
console.log("alumnos", alumnos)
console.log("iteracion", iteracion)

// map con un objeto

const movies = [
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama"],
    rate: 9.0,
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rate: 5.8,
  },
  {
    title: "The Prestige",
    year: 2006,
    director: "Christopher Nolan",
    duration: "2h 10min",
    genre: ["Drama", "Mystery", "Sci-Fi"],
    rate: 3.5,
  },
];

// 1era forma array function con condicionales
const resultado = movies.map((movie,index) => {
  if (movie.rate > 8) {
    movie.rate = "Excelente"
  } else if (movie.rate > 5) {
    movie.rate = "Bueno"
  } else {
    movie.rate = "Malo"
  } 
  return movie
})

console.log(resultado)

// 2da forma ternario
const resultado2 = movies.map((movie,index) => {
  movie.rate = movie.rate > 8 ? "Excelente" : movie.rate > 5 ? "Bueno" : "Malo"
  return movie
})

console.log(resultado2)

// filter

const filtro = movies.filter((movie, index) => movie.year < 2009)

console.log(filtro)

//every: true  - false
// sirve para poder evaluar que la condición se cumpla en todos los elementos
// and = &&
const numeros = [1,1,1,1,1]
const resultado3 = numeros.every((numero) => numero ===1 )
console.log(resultado3)


//some: true  - false
// sirve para poder evaluar que la condición se cumpla en al menos un caso
// or = ||
const numeros2 = [1,2,1,1,1]
const resultadob = numeros2.some((numero) => numero ===2 )
console.log(resultadob)


// find
// sirve para poder buscar en un array, porque este retorna solo 1 objeto
// si usando find no encontramos este retorna undefined
const busqueda = movies.find((movie,indice) => movie.title === "The Dark Knight")
console.log(busqueda)


// findIndex
// si usando findIndex no encontramos este retorna -1
const busqueda2 = movies.findIndex((movie,indice) => movie.title === "The Dark Knight")
console.log(busqueda2)


// iteradores
const movie = {
  title: "The Dark Knight",
  year: "2008",
  director: "Christopher Nolan",
  duration: "2h 32min",
  genre: ["Action", "Crime", "Drama"],
  rate: 9.0,
};

Object.keys(movie).forEach((key) => {
  console.log(key)
})

Object.values(movie).forEach((value) => {
  console.log(value)
})

Object.entries(movie).forEach((entrie) => {
  console.log(entrie)
})

Object.entries(movie).forEach(([key,value]) => {
  console.log(key,value)
})

//pasar de un array de arrays a un objeto

const movies2 = [
  [ 'title', 'The Dark Knight' ],
  [ 'year', '2008' ],
  [ 'director', 'Christopher' ],
  [ 'duration', '2h 32min' ],
  [ 'genre', [ 'Action', 'Crime', 'Drama' ] ],
  [ 'rate', 9 ],
]

const result = {}
movies2.forEach(([key, value]) => {
  result[key] = value
})

console.log(result)