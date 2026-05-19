export function calcularInfoMutua(probabilidades) {
    const info = [];

    for (let i = 0; i < probabilidades.length; i++) {
        const p = probabilidades[i];

        // Validamos que la probabilidad sea mayor que 0 para evitar log(0)
        if (p > 0) {
            info.push(Math.log2(1 / p)); // Calculamos la información mutua como log2(1/p)
        } else {
            info.push(null);
        }
    }

    return info;
}