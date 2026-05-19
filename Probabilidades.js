export function calcularProbabilidades() {
    const tabla = document.getElementById("tablaFrecuencia");
    const contenidoTexto = document.getElementById("contenido").value;
    const totalCaracteres = contenidoTexto.length;

    let probabilidades = []; // Vector vacío para guardar las probabilidades

    if (totalCaracteres === 0) return probabilidades;

    for (let i = 0; i < tabla.rows.length; i++) {
        const fila = tabla.rows[i];
        const frecuencia = parseInt(fila.cells[1].innerText);
        const probabilidad = frecuencia / totalCaracteres;

        probabilidades.push(probabilidad);
    }

    return probabilidades;
}