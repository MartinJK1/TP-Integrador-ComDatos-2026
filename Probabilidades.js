export function calcularProbabilidades() {
    // Apuntamos directo al cuerpo de la tabla para no contar los títulos
    const tbody = document.querySelector("#tabla-dinamica tbody");
    const contenidoTexto = document.getElementById("contenido").value;
    const totalCaracteres = contenidoTexto.length;

    let probabilidades = []; 

    if (totalCaracteres === 0) return probabilidades;

    for (let i = 0; i < tbody.rows.length; i++) {
        const fila = tbody.rows[i];
        // Solo calculamos si la fila tiene datos
        if (fila.cells[0].innerText.trim() !== '') {
            const frecuencia = parseInt(fila.cells[1].innerText);
            const probabilidad = frecuencia / totalCaracteres;
            probabilidades.push(probabilidad);
        }
    }

    return probabilidades;
}