import _ from "underscore";

/**
 * Esta función crea un nuevo Deck (baraja)
 * @param {Array<string>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<string>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<string>} Retorna un nuevo deck de cartas barajado
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    //me permite crear una baraja con todas las cartas
    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error("Tipos de carta es obligatorio");
    let deck = [];

    for (let i = 2; i <= 10; i++) {
        // 2 es el minimo y 10 es el maximo en una baraja de cartas
        for (let tipo of tiposDeCarta) {
            // en una baraja existen varios tipos: treboles, diamantes, corazones y picas
            deck.push(i + tipo);
        }
    }

    for (let especial of tiposEspeciales) {
        // me permite general el AS de corazones, treboles, etc etc
        for (let tipo of tiposDeCarta) {
            deck.push(especial + tipo);
        }
    }
    return _.shuffle(deck);
};

// export default crearDeck; // esto es una exportacion por default de la funcion crearDeck solo se puede exportar un funcion por default
