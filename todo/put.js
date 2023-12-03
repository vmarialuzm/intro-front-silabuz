const formTodo = document.getElementById("form");
const titleP = document.getElementById("titleP");
const bodyP = document.getElementById("bodyP");
const statusTodo = document.getElementById("statusP");

const msg = document.getElementById("msg");
const msg1 = document.getElementById("msg1");

const id = new URLSearchParams(window.location.search).get("id");

formTodo.addEventListener("submit", async (event) => {
    event.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (titleP.value === "") {
        msg.classList.remove("d-none");
    }
    if (bodyP.value === "") {
        msg1.classList.remove("d-none");
    }
    if (titleP.value !== "" && bodyP.value !== "") {
        msg.classList.add("d-none");
        msg1.classList.add("d-none");
        acceptData();
    }
    
};

async function acceptData() {
    const data = {
        title: titleP.value,
        body: bodyP.value,
        status: statusTodo.value
    };
    try {
        const response = await fetch(`http://127.0.0.1:8000/v3/todo3/${id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            Swal.fire("Actualizado", "Los datos se actualizaron correctamente", "success").then((result) => {
                if (result.isConfirmed) {
                    returnTodo();
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ocurrió un error"
            });
        }
    } catch (error) {
        console.log(error);
    }
}

function returnTodo() {
    window.location.replace(`./detail.html?id=${id}`);
}

async function setData() {
    try {
        const response = await fetch(`http://127.0.0.1:8000/v3/todo3/${id}`);
        const data = await response.json();
        titleP.value = data.title;
        bodyP.value = data.body;
        statusTodo.value = data.status;
    }
    catch (error) {
        console.log(error);
    }
}

setData()
