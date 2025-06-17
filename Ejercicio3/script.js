// 3- Pedir el radio al usuario para calcular el área de un círculo. Buscad la fórmula para calcular la superficie del círculo y el valor de PI (con 4 decimales). 

let radio= prompt("Dime el radio:");
const pi= 3.1416

function area(num1){
    let resultado = pi * (num1*num1);
    return resultado
}

console.log(area(radio))