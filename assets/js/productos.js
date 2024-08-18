document.getElementById("nuevo-producto-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
        const res = await fetch("http://localhost:3000/apiV1/nuevoProducto", {
            method: "POST",
            body: formData
        });

        const resJson = await res.json();

        if (res.status === 200) {
            document.getElementById("mensajeExito").style.display = "block";
            document.getElementById("mensajeExito").innerText = resJson.message;
            document.getElementById("mensajeError").style.display = "none";
            this.reset();
        } else {
            document.getElementById("mensajeError").style.display = "block";
            document.getElementById("mensajeError").innerText = resJson.message;
            document.getElementById("mensajeExito").style.display = "none";
        }
    } catch (error) {
        document.getElementById("mensajeError").style.display = "block";
        document.getElementById("mensajeError").innerText = "Error al crear el producto.";
        document.getElementById("mensajeExito").style.display = "none";
    }
});