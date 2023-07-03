import { valorCarta } from "./valor-carta";
/**
 * Lleva el conteo de puntos tanto del jugador como de la PC en un array (puntosJugadores) en donde la última posición corresponde a los puntos de la PC
 * @param {Number} turno Índice que indica los puntos del jugador o PC dentro del array puntosJugadores
 * @param {Array<Number>} puntosJugadores Array con los puntos del jugador y de la PC en donde la última posición del array corresponde a los puntos de la PC
 * @param {String} carta Carta que ha sito tomada del deck (baraja)
 * @param {Array<HTML>} mostrarPuntos Array que hace referencia a las etiquetas en dondes se mostrarán los puntajes del jugador o de la PC dentro del HTML
 */
export const acumularPuntos = (
    turno,
    puntosJugadores,
    carta,
    mostrarPuntos
) => {
    // turno 0: primer jugador y el último será la computadora
    puntosJugadores[turno] += valorCarta(carta);
    mostrarPuntos[turno].innerText = puntosJugadores[turno]; //muestra los puntos del jugador
    return puntosJugadores[turno];
};
