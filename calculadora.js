function calculadora(numero1, numero2, operacion) {
  
  let resultado;

  if (operacion === "*") {
    resultado = numero1 * numero2;
  } 
  else if (operacion === "/") {
    // si dividen entre 0
    if (numero2 === 0) {
      return "Error: No se puede dividir entre cero";
    }
    resultado = numero1 / numero2;
  } 
  else {
    resultado = "Ups, operación inválida";
  }

  return resultado;
}


// Pruebas....
console.log("División (35 / 3):", calculadora(35, 3, "/"));
console.log("Multiplicación (4 * 52):", calculadora(4, 52, "*"));
// Prueba división entre cero
console.log("División entre 0 (5 / 0):", calculadora(5, 0, "/")); 