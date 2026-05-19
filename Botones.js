function mostrarInput() {
    document.getElementById("caja-input").style.display = "block";
}

function cargarArchivo() {
    const archivo = document.getElementById("archivo").files[0];

    if (archivo) {
        const lector = new FileReader();
        
        lector.onload = function(e) {
            document.getElementById("contenido").value = e.target.result;
        };

        lector.readAsText(archivo);
    } else {
        alert("Por favor, selecciona un archivo .txt");
    }
}

function ocultarInput() {
    document.getElementById("caja-input").style.display = "none";
}