import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta-html";
import { determinarGanador } from "./determinar-ganador";
import { tomarCarta } from "./tomar-carta";

/**
 * Función que se encarga del turno de la PC
 * @param {Number} puntosMinimos Corresponde al puntaje que ha obtenido el jugador. El objetivo de la PC es obtener un puntaje mayor a este para poder ganar la partida
 * @param {Array<Number>} puntosJugadores Array con los puntos del jugador y de la PC en donde la última posición del array corresponde a los puntos de la PC
 * @param {*} deck Baraja
 * @param {*} mostrarPuntos Array que hace referencia a las etiquetas en dondes se mostrarán los puntajes del jugador o de la PC dentro del HTML
 * @param {*} divCartasJugadores Array que hace referencia a las etiquetas en dondes se mostrarán las imágenes de las cartas dentro del HTML
 */
export const turnoPC = (
    puntosMinimos,
    puntosJugadores,
    deck,
    mostrarPuntos,
    divCartasJugadores
) => {
    let puntosPC = 0;
    do {
        //elegimos un diclo do while porque minimamente UNA SOLA VEZ la computadora debe de pedir una carta
        const carta = tomarCarta(deck);
        puntosPC = acumularPuntos(
            puntosJugadores.length - 1,
            puntosJugadores,
            carta,
            mostrarPuntos
        );
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
    } while (puntosPC < puntosMinimos && puntosMinimos <= 21); // si los puntos minimos ha superar (los del jugador) son mayores a 21 pues basta conque la PC saque una carta para ganar
    determinarGanador(puntosJugadores);
};
