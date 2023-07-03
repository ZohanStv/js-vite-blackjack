/**
 * Muestra las cartas que han sido tomadas en el HTML. Ejemplo: \<img class="carta" src="./assets/cartas/10C.png">
 * @param {String} carta Carta que ha sido tomada del deck (baraja)
 * @param {Number} turno Índice que indica la posición en el array divCartasJugadores
 * @param {Array<HTML>} divCartasJugadores Array que hace referencia a las etiquetas en dondes se mostrarán las imágenes de las cartas dentro del HTML
 * @returns {HTMLImageElement} Carta
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    // necesitamos mostrar las cartas de esta forma <img class="carta" src="./assets/cartas/10C.png">
    const imgCarta = document.createElement("img"); // creamos la etiqueta <img>
    imgCarta.classList.add("carta"); //Añadimos la class = "carta" para que apliquen los estilos del css
    imgCarta.src = `./assets/cartas/${carta}.png`; //añadimos un src a la etiqueta img
    divCartasJugadores[turno].append(imgCarta); //añadimos la carta al html dentro del div cartas ya sea jugador o PC
};
