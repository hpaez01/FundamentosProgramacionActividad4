let contador = 0;
let totalFacturacion = 0;
let litrosArticulo1 = 0;
let facturasMayores600 = 0;

function pedirFactura() {
  if (contador < 5) {
    let codigo = prompt("Ingrese el código del artículo:");
    let litros = prompt("Ingrese la cantidad vendida en litros:");
    let precio = prompt("Ingrese el precio por litro:");

    codigo = parseInt(codigo);
    litros = parseFloat(litros);
    precio = parseFloat(precio);

    if (isNaN(codigo) || isNaN(litros) || isNaN(precio)) {
      alert("Entrada inválida. Intente de nuevo.");
      pedirFactura();
      return;
    }

    let totalFactura = litros * precio;
    totalFacturacion += totalFactura;

    if (codigo === 1) {
      litrosArticulo1 += litros;
    }

    if (totalFactura > 600) {
      facturasMayores600++;
    }

    contador++;
    pedirFactura();
  } else {
    mostrarResultados();
  }
}

function mostrarResultados() {
  alert(
    "Resultados:\n" +
    "Facturación total: $" + totalFacturacion.toFixed(2) + "\n" +
    "Litros vendidos del artículo 1: " + litrosArticulo1 + " litros\n" +
    "Cantidad de facturas mayores a $600: " + facturasMayores600
  );
}
