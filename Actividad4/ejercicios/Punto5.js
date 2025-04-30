let numeros = [];
let contador = 0;

function pedirNumero() {
  if (contador < 10) {
    let mensaje = obtenerTextoOrden(contador + 1);
    let respuesta = prompt(`Ingrese el ${mensaje} número:`);
    let numero = parseFloat(respuesta);

    if (!isNaN(numero)) {
      numeros.push(numero);
      contador++;
      pedirNumero();
    } else {
      alert("Por favor, ingrese un número válido.");
      pedirNumero();
    }
  } else {
    calcularResultados();
  }
}

function calcularResultados() {
  let positivos = [];
  let negativos = [];
  let ceros = 0;

  numeros.forEach(num => {
    if (num > 0) {
      positivos.push(num);
    } else if (num < 0) {
      negativos.push(num);
    } else {
      ceros++;
    }
  });

  const media = arr => arr.length > 0
    ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2)
    : 0;

  alert(
    "--- Resultados ---\n" +
    "Media de positivos: " + media(positivos) + "\n" +
    "Media de negativos: " + media(negativos) + "\n" +
    "Cantidad de ceros: " + ceros
  );
}

function obtenerTextoOrden(numero) {
  switch (numero) {
    case 1: return "primer";
    case 2: return "segundo";
    case 3: return "tercer";
    case 4: return "cuarto";
    case 5: return "quinto";
    case 6: return "sexto";
    case 7: return "séptimo";
    case 8: return "octavo";
    case 9: return "noveno";
    case 10: return "décimo";
    default: return numero + "°";
  }
}
