let puntajeJugador = 0;
let puntajeIa = 0;
let rondasJugadas = 0;
const opciones = ["piedra", "papel", "tijera"];

console.log("¡Hola!  bienvenido al kachipún contra la IA Master");
console.log(`¡Muy bien ${prompt("ingresa tu nombre")}!`);

let jugadas = parseInt(prompt("¿Cuántas veces quieres jugar? 1, 2 ó 3"));
if (isNaN(jugadas) || jugadas < 1 || jugadas > 3) {
  console.log("No elegiste rondas, se jugará solo 1");
  jugadas = 1;
} else {
  console.log(`Ok, van a jugar por ${jugadas} rondas al kachipún.`);
}

console.log("¿listo para jugar?");
console.log("¡Entonces vamos! que empieze el kachipún.");
console.log("¡kaaaaa...")
console.log("chiiiiii...")
console.log("PÚN!")
console.log("---------------------------------------------------------");

function obtenerJugadaIa() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "piedra";
  } else if (random === 1) {
    return "papel";
  } else {
    return "tijera";
  }
}

for (let i = 1; rondasJugadas < jugadas; i++) {
  let miJugada = prompt("¿Qué eliges?: piedra, papel o tijera");

  let jugadaIa = obtenerJugadaIa();
  console.log(`Ronda ${i}:`);
  console.log(`Tú elegiste: ${miJugada}`);
  console.log(`La IA eligió: ${jugadaIa}`);

  if (
    (miJugada === "piedra" && jugadaIa === "tijera") ||
    (miJugada === "papel" && jugadaIa === "piedra") ||
    (miJugada === "tijera" && jugadaIa === "papel")
  ) {
    console.log("Resultado: ¡Ganaste esta ronda! =D");
    puntajeJugador++;
  } else if (miJugada === jugadaIa) {
    console.log("Resultado: Empate. La ronda no suma puntos.");
    console.log("---------------------------------------------------------");
  } else {
    console.log("Resultado: Ouuh. Perdiste esta ronda =(");
    puntajeIa++;
  }

  rondasJugadas++;
  console.log(`Puntos: Jugador ${puntajeJugador} - IA Master ${puntajeIa}`);
  console.log("---------------------------------------------------------");
  }

let mensajeFinal = "";
if (puntajeJugador > puntajeIa) {
  mensajeFinal = "¡Ganaste este kachipún!";
} else if (puntajeJugador < puntajeIa) {
  mensajeFinal = "Perdiste el kachipún.";
} else {
  mensajeFinal = "Fue empate, intentalo otra vez.";
}

console.log(mensajeFinal);
