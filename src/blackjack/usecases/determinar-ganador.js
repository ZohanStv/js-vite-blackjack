/**
 * Indica quien ha ganado la partida, si el jugador o la PC
 * @param {Array[Number]} puntosJugadores Array que contiene los puntos obtenidos del jugador y la PC
 */
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosPC] = puntosJugadores;
    setTimeout(() => {
        if (puntosPC === puntosMinimos) {
            alert("Empate!");
        } else if (puntosMinimos > 21) {
            alert("Jugador pierde!");
        } else if (puntosPC > 21) {
            alert("Jugador gana!");
        } else {
            alert("PC gana!");
        }
    }, 100);
};
