let seguir = true;
let resultados = "";
while (seguir) {
  let numero = parseFloat(prompt("Ingrese un numero para ver su cuadrado.\nIngrese un numero negativo para salir."));
  if (numero < 0 || isNaN(numero)) {
    seguir = false;
    alert("haz elegido salir, Adios.");
  } else {
    let cuadrado = numero * numero;
    alert(`El cuadrado de ${numero} es ${cuadrado}`);
    resultados += `El cuadrado de ${numero} es ${cuadrado}<br>`;
  }
}
document.write("<h2>Cuadrados consultados:</h2>");
document.write(resultados || "No se ingresaron números válidos.");