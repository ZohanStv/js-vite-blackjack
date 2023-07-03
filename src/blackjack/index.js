import _ from "underscore";
// import { crearDeck } from "./usecases/crear-deck";
// import importacionPorDefaultCrearDeck from "./usecases/crear-deck";
// import tomarCarta from "./usecases/tomar-carta"; // importacion por default
// import valorCarta from "./usecases/valor-carta"; //importacion por default
import {
    crearDeck,
    tomarCarta,
    turnoPC,
    acumularPuntos,
    crearCarta,
} from "./usecases";

/**
 * 2C = two of clubs (tréboles)
 * 2D = two of diamonds (diamantes)
 * 2H = two of hearts (corazones)
 * 2S = two of spades (picas)
 */

const miModulo = (() => {
    // patrón módulo: da seguridad al código evitando acceder a las varibles desde la consola del navegador
    "use strict"; // exige a JS ser estricto con la syntaxis

    let deck = [];
    const tipos = ["C", "D", "H", "S"],
        especiales = ["A", "J", "Q", "K"]; // corresponden a las cartas A (AS), J (JACK), Q (REINA) y K (REY)

    let puntosJugadores = [];
    //Referencias HTML

    const btnPedir = document.querySelector("#btnPedir"), //hacemos referencia al boton pedir cartas en el html
        btnDetener = document.querySelector("#btnDetener"), //hacemos referencia al boton detener en el html
        btnNuevoJuego = document.querySelector("#btnNuevo"); //hacemos referencia al boton nuevo juego en el html

    const divCartasJugadores = document.querySelectorAll(".divCartas");

    const mostrarPuntos = document.querySelectorAll("small"); //hacemos referencia a las etiquetas <small> que se encuentran en el HTML, entre estas etiquetas se muestra el puntaje tanto del jugador como el de la pc

    const inicializarJuego = (numJugadores = 2) => {
        //inicalizamos el juego
        puntosJugadores = [];
        deck = crearDeck(tipos, especiales);
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0); //la ultima posicion es siempre el PC
        }

        mostrarPuntos.forEach((elem) => (elem.innerText = 0));
        divCartasJugadores.forEach((elem) => (elem.innerText = ""));
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    };

    //EVENTOS
    btnPedir.addEventListener("click", () => {
        const carta = tomarCarta(deck);
        const puntosJugador = acumularPuntos(
            0,
            puntosJugadores,
            carta,
            mostrarPuntos
        );
        // necesitamos mostrar las cartas de esta forma <img class="carta" src="./assets/cartas/10C.png">
        crearCarta(carta, 0, divCartasJugadores);

        if (puntosJugador > 21) {
            console.warn("Has perdido");
            btnPedir.disabled = true; // si el jugador ha perdido debemos de bloquear el boton pedir carta para que no pueda pedirmas cartas
            btnDetener.disabled = true;
            turnoPC(
                puntosJugador,
                puntosJugadores,
                deck,
                mostrarPuntos,
                divCartasJugadores
            );
        } else if (puntosJugador === 21) {
            console.warn("Good!!! 21");
            btnPedir.disabled = true; // si el jugador ha llegado a 21 no necesita sacar mas cartas
            btnDetener.disabled = true;
            turnoPC(
                puntosJugador,
                puntosJugadores,
                deck,
                mostrarPuntos,
                divCartasJugadores
            );
        }
    });

    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoPC(
            puntosJugadores[0],
            puntosJugadores,
            deck,
            mostrarPuntos,
            divCartasJugadores
        );
    });

    btnNuevoJuego.addEventListener("click", () => {
        inicializarJuego();
    });
    return {
        nuevoJuego: inicializarJuego,
    };
})();
