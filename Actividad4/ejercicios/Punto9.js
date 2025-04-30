function mostrarContador() {
    let contador = 0;
  
    while (contador <= 99999) {
      let contadorStr = contador.toString().padStart(5, '0'); // Asegura que tenga 5 dígitos, rellenando con ceros al inicio
  
      // Sustituir cualquier '3' por 'E'
      let contadorFinal = contadorStr.replace(/3/g, 'E');
  
      alert(contadorFinal); // Mostrar el contador con alert
  
      contador++; // Incrementamos el contador
    }
  }
   