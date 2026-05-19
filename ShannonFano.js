export function generarCodigosASCII(probabilidades) {
    // Creamos un array de objetos con índice y probabilidad
    const elementos = probabilidades.map((p, i) => ({
        indiceOriginal: i,
        probabilidad: p,
        codigo: ''
    }));

    // Ordenamos por probabilidad descendente
    elementos.sort((a, b) => b.probabilidad - a.probabilidad);

    // Función recursiva para asignar códigos
    function asignarCodigo(subgrupo, prefijo) {
        if (subgrupo.length === 1) {
            subgrupo[0].codigo = prefijo || '0';
            return;
        }

        const total = subgrupo.reduce((acc, el) => acc + el.probabilidad, 0);
        let suma = 0;
        let division = 0;

        for (; division < subgrupo.length - 1; division++) {
            suma += subgrupo[division].probabilidad;
            if (suma >= total / 2) break;
        }

        const grupo0 = subgrupo.slice(0, division + 1);
        const grupo1 = subgrupo.slice(division + 1);

        asignarCodigo(grupo0, prefijo + '0');
        asignarCodigo(grupo1, prefijo + '1');
    }

    asignarCodigo(elementos, '');

    // Restauramos el orden original antes de devolver
    const resultado = [];
    elementos.forEach(el => resultado[el.indiceOriginal] = el.codigo);

    return resultado; // Vector de códigos en el mismo orden que el vector original de probabilidades
}