let numsecreto=Math.floor(Math.random()*50)+1;
let intentos=0;
let usuario
let resultados="";
window.alert("Bienvenido al juego de Adivina el numero")
window.alert("Adivina el numero entre 1 y 50")
while (true) {
    usuario=parseInt(prompt("Digita el numero"));
    if(isNaN(usuario)){
        window.alert("Digita un numero valido");
        continue;
    }
    intentos++;
    if(usuario<numsecreto){
        window.alert("El numero es mayor, Intentalo otra ves");        
    }else if(usuario>numsecreto){
        window.alert("El numero es menor, Intentalo otra ves");
    }else {
        window.alert(`Adivinaste, el numero es ${numsecreto}, en ${intentos} intentos lo lograste`);
        resultados += `El numero que adivinaste fue ${numsecreto} en ${intentos} intentos <br>`;
        window.alert("Gracias por Jugar, Adios");
        break;
    }
    }
    document.write("<h2> Numero adivinado </h2>");
    document.write(resultados || "No se ingresaron números válidos.");
    