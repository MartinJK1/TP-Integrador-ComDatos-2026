export function calcularLongitudPromedio(probabilidades, codigos) {
    if (probabilidades.length !== codigos.length) {
        throw new Error("Hay un error: la cantidad de probabilidades y códigos no coincide.");
    }

    let sumaTotal = 0;

    for (let i = 0; i < probabilidades.length; i++) {
        sumaTotal += probabilidades[i] * codigos[i].length;
    }

    return sumaTotal;
}