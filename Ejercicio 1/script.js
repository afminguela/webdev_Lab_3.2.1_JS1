// 1- Pide al usuario dos números. Muestra el resultado de la resta de ambos, en pantalla y/o en consola

let x= prompt("dime un numero:");
let z= prompt("Dime otro numero:");

function resta(num1, num2){
    let resultado = num1 - num2;
    return resultado
}

console.log(resta(x,z))