async function createTodo(jsonData) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
    }
    
    const response = await fetch("https://127.0.0.1:8000/api/v1/todo/", options);
}

/* -------------------------------------------- */

const header = new Headers()
header.set("Content-Type","application/json")

/* -------------------------------------------- */

const fetchData = async (url, method = "GET", body = null) => {
    const options = {
        method: method,
        headers: {
          "Content-Type": "application/json"
        }
    }

    if (body) options.body = JSON.stringify(body)

    const response = await fetch(url, options)
    const data = await response.json()
    return data

}

const getTodo = async () => {
    const data = await fetchData("https://127.0.0.1:8000/api/v1/todo/")
}

const createTodo2 = async () => {
    const data = await fetchData("https://127.0.0.1:8000/api/v1/todo/","POST", {
        title: "Mi primera tarea",
        description: "Es hacer mi tarea de JS"
    })
}