import { generarCodigosHuffman } from './Huffman.js';
import { generarCodigosASCII as generarCodigosShannon } from './ShannonFano.js';
import { calcularLongitudPromedio } from './LongitudPromedio.js';
import { calcularEntropia } from './EntropíaTotal.js';
import { calcularInfoMutua } from './InfoMutua.js';

document.addEventListener("DOMContentLoaded", () => {
    const btnAnalizar = document.getElementById("btn-analizar");
    const btnDecodificar = document.getElementById("btn-decodificar");

    let diccionarioHuffman = {};

    btnAnalizar.addEventListener("click", () => {
        // 1. Calculamos frecuencias
        window.calcularFrecuencia(); 
        
        // 2. Esperamos unos milisegundos para asegurar que el DOM se actualizó
        setTimeout(() => {
            const tbody = document.querySelector('#tabla-dinamica tbody');
            const textoOriginal = document.getElementById('contenido').value;
            const totalCaracteres = textoOriginal.length;

            if (totalCaracteres === 0) return;

            const simbolos = [];
            const probabilidades = [];

            // 3. Leemos la tabla
            for (let i = 0; i < tbody.rows.length; i++) {
                const char = tbody.rows[i].cells[0].textContent;
                if (char !== '') {
                    const count = parseInt(tbody.rows[i].cells[1].textContent);
                    simbolos.push(char);
                    probabilidades.push(count / totalCaracteres);
                }
            }

            // 4. Generamos códigos
            const codigosHuffman = generarCodigosHuffman(simbolos, probabilidades);
            const codigosShannon = generarCodigosShannon(probabilidades);

            // 5. Inyectamos códigos en la tabla
            diccionarioHuffman = {}; 
            for (let i = 0; i < simbolos.length; i++) {
                tbody.rows[i].cells[2].textContent = codigosHuffman[i];
                tbody.rows[i].cells[3].textContent = codigosShannon[i];
                diccionarioHuffman[simbolos[i]] = codigosHuffman[i]; 
            }

            // 6. Cálculos de eficiencia
            const infoMutua = calcularInfoMutua(probabilidades);
            const entropia = calcularEntropia(probabilidades, infoMutua);
            
            const lonHuff = calcularLongitudPromedio(probabilidades, codigosHuffman);
            const lonShan = calcularLongitudPromedio(probabilidades, codigosShannon);

            // 7. Actualizamos tabla estática (Asegurate que estos IDs existan en tu HTML)
            document.getElementById('Longitud-Huffman').textContent = "Long: " + lonHuff.toFixed(2);
            document.getElementById('Longitud-Shannon').textContent = "Long: " + lonShan.toFixed(2);
            document.getElementById('Eficiencia-Huffman').textContent = "Ef: " + (entropia / lonHuff).toFixed(2);
            document.getElementById('Eficiencia-Shannon').textContent = "Ef: " + (entropia / lonShan).toFixed(2);

            // 8. Mensaje codificado
            let textoCodificado = "";
            for (let i = 0; i < textoOriginal.length; i++) {
                textoCodificado += (diccionarioHuffman[textoOriginal[i]] || "");
            }
            document.getElementById('texto-codificado').value = textoCodificado;
        }, 100); 
    });

    // 9. Lógica del botón DECODIFICAR
    btnDecodificar.addEventListener("click", () => {
        const textoCodificado = document.getElementById('texto-codificado').value;
        const dictInverso = {};
        for (let char in diccionarioHuffman) {
            dictInverso[diccionarioHuffman[char]] = char;
        }

        let textoRecuperado = "";
        let buffer = "";
        for (let bit of textoCodificado) {
            buffer += bit;
            if (dictInverso[buffer]) { 
                textoRecuperado += dictInverso[buffer];
                buffer = "";
            }
        }
        document.getElementById('texto-recuperado').value = textoRecuperado;
    });
});