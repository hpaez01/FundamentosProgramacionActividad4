function pedirSueldo() {
  let N = prompt("Ingrese cuántos sueldos desea introducir:");
  N = parseInt(N);

  if (isNaN(N) || N <= 0) {
    alert("Por favor, ingrese un número válido de sueldos.");
    return;
  }

  let maxSueldo = -Infinity; // Comenzamos con un valor muy bajo para encontrar el máximo.

  for (let i = 1; i <= N; i++) {
    let sueldo = prompt("Ingrese el sueldo número " + i + ":");
    sueldo = parseFloat(sueldo);

    if (isNaN(sueldo)) {
      alert("Entrada inválida. Intente de nuevo.");
      i--; // Restamos uno para volver a pedir el sueldo
      continue;
    }

    if (sueldo > maxSueldo) {
      maxSueldo = sueldo; // Actualizamos el máximo sueldo
    }
  }

  alert("El sueldo máximo ingresado es: " + maxSueldo);
}

