/**
 * Determina cual es el valor de la carta tomada del deck (baraja)
 * @param {String} carta Carta tomada del deck
 * @returns {Number} Retorna un número que indica el valor de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1); //extrae el valor de la carta del nombre de la carta (el numero es tipo string)
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; // para las cartas A,J,Q,K que no son numeros (isNaN = true) se hace la validacion de lo contrario valor * 1
};

// export default valorCarta;
