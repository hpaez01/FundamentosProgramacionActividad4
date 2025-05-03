let numeros=[5,6,7,8,9,11,13,21,26,30,69,77,79,80,99];
let impares=numeros.filter(numeros=> numeros % 2 !== 0);
document.write(`Los numeros escogidos son: ${numeros.join(", ")}`);
let resultado=1;
for(let i=0; i<impares.length; i++){
  resultado*=impares[i];
}
document.write(`<p> Los numeros impares encontrados son:  ${impares.join(" , ")} </p> `);
document.write(` <p> La multiplicacion de los numeros impares es = ${resultado.toLocaleString("es-ES")} </p> `);