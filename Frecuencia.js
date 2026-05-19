function calcularFrecuencia() {
    const text = document.getElementById('contenido').value;
    const frecuencia = {};
    for (const char of text) {
        frecuencia[char] = (frecuencia[char] || 0) + 1;
    }
    actualizarTabla(frecuencia);
}

function actualizarTabla(frecuencia) {
    const tbody = document.querySelector('#tabla-dinamica tbody');
    tbody.innerHTML = ''; // Limpia la tabla antes de actualizar

    const entries = Object.entries(frecuencia)
        .sort((a, b) => b[1] - a[1]); // Ordena por frecuencia descendente

    // Rellenar la tabla con los datos reales
    entries.forEach(([char, count]) => {
        const row = tbody.insertRow();
        row.insertCell().textContent = char;
        row.insertCell().textContent = count;
    });

    // Completar con filas vacías si hay menos de 8
    const filasActuales = entries.length;
    if (filasActuales < 8) {
        for (let i = filasActuales; i < 8; i++) {
            const row = tbody.insertRow();
            row.insertCell().textContent = '';
            row.insertCell().textContent = '';
        }
    }
}

