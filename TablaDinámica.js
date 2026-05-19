document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("table-body");
    const nameInput = document.getElementById("name-input");
    const ageInput = document.getElementById("age-input");
    const addRowButton = document.getElementById("add-row");

    // Crear 8 filas vacías al inicio
    const filasIniciales = 8;
    for (let i = 0; i < filasIniciales; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `<td></td><td></td><td></td><td></td>`;
        tableBody.appendChild(row);
    }

});