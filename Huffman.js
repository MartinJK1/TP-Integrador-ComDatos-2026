export function generarCodigosHuffman(simbolos, probabilidades) {
    // Creamos los nodos iniciales (hojas del árbol)
    let nodos = simbolos.map((simbolo, index) => ({
        simbolo: simbolo,
        probabilidad: probabilidades[index],
        izq: null,
        der: null
    }));

    // Si solo hay un símbolo, le asignamos '0'
    if (nodos.length === 1) return [ { simbolo: nodos[0].simbolo, codigo: '0' } ];

    // Mientras haya más de un nodo, combinamos los dos de menor probabilidad
    while (nodos.length > 1) {
        nodos.sort((a, b) => a.probabilidad - b.probabilidad); // Ordenar de menor a mayor
        
        let nodo1 = nodos.shift(); // Sacamos el más chico
        let nodo2 = nodos.shift(); // Sacamos el segundo más chico
        
        // Creamos un nuevo nodo padre que une a los dos
        let nuevoNodo = {
            simbolo: null,
            probabilidad: nodo1.probabilidad + nodo2.probabilidad,
            izq: nodo1,
            der: nodo2
        };
        
        nodos.push(nuevoNodo);
    }

    let codigos = {}; // Diccionario para guardar "Letra": "Código"

    // Función recursiva para recorrer el árbol generado
    function recorrerArbol(nodo, codigoActual) {
        if (!nodo) return;
        // Si es una hoja (tiene símbolo), guardamos el código
        if (nodo.simbolo !== null) {
            codigos[nodo.simbolo] = codigoActual;
        }
        recorrerArbol(nodo.izq, codigoActual + '0'); // Hacia la izquierda sumamos '0'
        recorrerArbol(nodo.der, codigoActual + '1'); // Hacia la derecha sumamos '1'
    }

    recorrerArbol(nodos[0], '');

    // Devolvemos los códigos en el orden original de los símbolos
    return simbolos.map(simbolo => codigos[simbolo]);
}