document.write();
let seguir = true;
let historial = "";
while (seguir) {
    let usuario=parseInt(prompt("Escriba el numero que desee saber el factorial"));
        if (isNaN(usuario) || usuario<0) {
        alert("Error, Escriba un numero que sea igual o mayor a 0");
    } else {
        let factorial=1;
        for (let i=1; i<=usuario; i++) {
            factorial *=i;
        }
        alert(`El factorial del numero ${usuario} es = ${factorial}`);
        let resultados = `El factorial del numero ${usuario} es = ${factorial}`;
        historial += `${resultados}<br>`;
    }
    let decision = true;
    while (decision) {
        let respuesta=prompt("Desea calcular otro factorial (si / no)").toLowerCase();
        if (respuesta==="si") {
            decision=false;
            seguir=true;
        } else if (respuesta==="no") {
            decision=false;
            seguir=false;
            alert("Gracias por usar la calculadora de factoriales");
            document.write("<h2><h3> Historial de los Factoriales </h3>");
            document.write(historial);
        } else {
            alert("Dato incorrecto, Por favor escriba si (para continuar) o no (para salir)");
        }  
    }
}
            

