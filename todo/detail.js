const titleElement = document.querySelector("#title");
const desc = document.querySelector("#desc");
const created = document.querySelector("#created");
const statusElement = document.querySelector("#status");
/* const btnDelete = document.querySelector("#btn-delete"); */
const button = document.querySelector("#button");

const getTask = async () => {
    // Paso1: Obtener los datos de la url
    const response = await fetch(`http://127.0.0.1:8000/v3/todo3/${getId()}`);
    const {title, body, created_at, status} = await response.json();  //desestructuracion
    titleElement.textContent = title;
    desc.textContent = body;
    dayjs.extend(dayjs_plugin_relativeTime);
    created.textContent = `Hace ${dayjs(created_at).fromNow()}`;
    statusElement.textContent = status;

    button.innerHTML = `
    <a href="./index.html" class="btn btn-primary">Regresar</a>
    <a href="./edit.html?id=${getId()}" class="btn btn-primary">Editar</a>
    <button onclick="deleteTodo()" class="btn btn-danger">Eliminar</button>
    `
};

getTask();

/* ------------------delete------------------ */

const deleteTodo = async function() {
    const {value} = await Swal.fire({
        title: 'Está seguro de eliminar este registro?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sí',
        denyButtonText: `No`,
    });
    
    if (value) {
        try {
            await fetch(
                `http://127.0.0.1:8000/v3/todo3/${getId()}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            location.href = "/todo";
        } catch (error) {
            Swal.fire({
                text: error,
                icon: "error",
            });
        }
    }
};

/* ------------------función a reusar------------------ */

function getId() {
    const params = new URLSearchParams(location.search);
    return params.get("id");
}

