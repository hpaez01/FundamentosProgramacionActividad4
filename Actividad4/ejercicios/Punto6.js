function pedirNumero() {
  let numero = prompt("Ingrese un número del 0 al 10:");
  numero = parseInt(numero);

  if (numero >= 0 && numero <= 10) {
    let resultado = "Tabla de multiplicar del " + numero + ":\n";
    for (let i = 1; i <= 10; i++) {
      resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
  } else {
    alert("Número inválido. Debe estar entre 0 y 10.");
  }
}
