function calculadora(numero1, numero2, operacion) {
    let resultado;

    if (operacion === "+") {
        resultado = numero1 + numero2;
    } else if (operacion === "-") {
        resultado = numero1 - numero2;
    } else {
        resultado = "la operación no es válidaa";
    }

    return resultado;
}

console.log("Suma:", calculadora(8, 4, "+")); 
console.log("Resta:", calculadora(8, 4, "-"));