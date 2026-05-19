export function calcularEntropia(probabilidades, informacion) {
    // Validamos que ambos vectores tengan la misma longitud
    if (probabilidades.length !== informacion.length) {
        throw new Error("Hay un error: la cantidad de probabilidades no coincide con la cantidad de información.");
    }

    let entropia = 0;

    for (let i = 0; i < probabilidades.length; i++) {
        entropia += probabilidades[i] * informacion[i]; // Multiplicamos elemento por elemento y acumulamos
    }

    return entropia;
}