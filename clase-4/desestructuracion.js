const user = {
    name: "Linder",
    last_name: "Hassinger",
    salary: 1
}

console.log(user.name)

//destructuración

const {name:first_name,salary} = user
console.log(first_name,salary)

/* -------------------------- */

const personas = [
    ["nombre1","apellido"],
    ["n2","n2d"]
]

personas.forEach(([key,value]) => console.log(key,value))
