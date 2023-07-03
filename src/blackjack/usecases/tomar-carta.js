/**
 * Toma una carta del deck (baraja)
 * @param {Array<string>} deck
 * @returns {String} Retorna una carta tomada del deck
 */
export const tomarCarta = (deck) => {
    if (deck.length === 0) {
        throw "No hay cartas en el deck";
    }
    return deck.shift();
};

// export default tomarCarta;
