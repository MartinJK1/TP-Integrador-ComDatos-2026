import { generarCodigosHuffman } from './Huffman.js';
import { generarCodigosASCII as generarCodigosShannon } from './ShannonFano.js';

document.addEventListener("DOMContentLoaded", () => {
    const btnAnalizar = document.getElementById("btn-analizar");
    const btnDecodificar = document.getElementById("btn-decodificar");

    // Guardaremos el diccionario para poder decodificar después
    let diccionarioHuffman = {};

    btnAnalizar.addEventListener("click", () => {
        // 1. Calculamos frecuencias
        window.calcularFrecuencia(); 
        
        // (Opcional) Si tenían esta función en EficienciaShannon-Fano.js, la ejecutamos
        if(typeof window.calcularEficienciaShannonFano === "function") {
            window.calcularEficienciaShannonFano();
        }

        const tbody = document.querySelector('#tabla-dinamica tbody');
        const textoOriginal = document.getElementById('contenido').value;
        const totalCaracteres = textoOriginal.length;

        if (totalCaracteres === 0) return;

        const simbolos = [];
        const probabilidades = [];

        // 2. Leemos la tabla
        for (let i = 0; i < tbody.rows.length; i++) {
            const char = tbody.rows[i].cells[0].textContent;
            if (char !== '') {
                const count = parseInt(tbody.rows[i].cells[1].textContent);
                simbolos.push(char);
                probabilidades.push(count / totalCaracteres);
            }
        }

        // 3. Generamos los códigos matemáticos
        const codigosHuffman = generarCodigosHuffman(simbolos, probabilidades);
        const codigosShannon = generarCodigosShannon(probabilidades);

        // 4. Inyectamos los ceros y unos en las columnas 3 y 4
        diccionarioHuffman = {}; 
        for (let i = 0; i < simbolos.length; i++) {
            tbody.rows[i].cells[2].textContent = codigosHuffman[i];
            tbody.rows[i].cells[3].textContent = codigosShannon[i];
            
            // Guardamos Letra -> Código para luego traducir todo el texto
            diccionarioHuffman[simbolos[i]] = codigosHuffman[i]; 
        }

        // 5. Convertimos el "Hola mundo" a binario (usando Huffman por defecto)
        let textoCodificado = "";
        for (let i = 0; i < textoOriginal.length; i++) {
            let char = textoOriginal[i];
            textoCodificado += diccionarioHuffman[char];
        }
        document.getElementById('texto-codificado').value = textoCodificado;
        document.getElementById('texto-recuperado').value = ""; // Limpiamos la decodificación anterior
    });

    // 6. Lógica del botón DECODIFICAR
    btnDecodificar.addEventListener("click", () => {
        const textoCodificado = document.getElementById('texto-codificado').value;
        if (textoCodificado === "") return;

        // Invertimos el diccionario: de {"A": "01"} pasamos a {"01": "A"}
        const dictInverso = {};
        for (let char in diccionarioHuffman) {
            dictInverso[diccionarioHuffman[char]] = char;
        }

        let textoRecuperado = "";
        let buffer = "";
        
        // Leemos bit a bit buscando coincidencias
        for (let bit of textoCodificado) {
            buffer += bit;
            if (dictInverso[buffer]) { 
                textoRecuperado += dictInverso[buffer];
                buffer = ""; // Reseteamos para buscar la siguiente letra
            }
        }

        document.getElementById('texto-recuperado').value = textoRecuperado;
    });
});