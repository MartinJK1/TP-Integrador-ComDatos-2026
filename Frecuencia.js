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
    tbody.innerHTML = ''; // Limpia la tabla

    const entries = Object.entries(frecuencia)
        .sort((a, b) => b[1] - a[1]); 

    entries.forEach(([char, count]) => {
        const row = tbody.insertRow();
        row.insertCell().textContent = char;   // Columna 1
        row.insertCell().textContent = count;  // Columna 2
        row.insertCell().textContent = '';     // Columna 3 (Huffman)
        row.insertCell().textContent = '';     // Columna 4 (Shannon-Fano)
    });

    const filasActuales = entries.length;
    if (filasActuales < 8) {
        for (let i = filasActuales; i < 8; i++) {
            const row = tbody.insertRow();
            row.insertCell().textContent = '';
            row.insertCell().textContent = '';
            row.insertCell().textContent = '';
            row.insertCell().textContent = '';
        }
    }
}
window.calcularFrecuencia = calcularFrecuencia; // Para que Main.js pueda acceder