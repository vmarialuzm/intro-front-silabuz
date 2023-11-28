const form = document.querySelector("form")
const inputs = document.querySelectorAll("input")
const select = document.querySelector("select")

form.onsubmit = async function (event) {
    event.preventDefault();

    const body = {
        status: select.value,
    };

    inputs.forEach((input) => (body[input.name] = input.value));

    try {
        const response = await fetch("http://127.0.0.1:8000/v3/todo3/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });

        console.log(response);
        Swal.fire({
            text: "Tarea creada",
            icon: "success",
        });
        location.href = "/todo";
    } catch (error){
        Swal.fire({
            text: error,
            icon: "error",
        });
    }
};