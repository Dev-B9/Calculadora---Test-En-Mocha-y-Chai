function calcular(num1, num2, operacion) {
  let resultado;

  switch (operacion) {
    case '+':
      resultado = (num1 + num2).toFixed(2);
      break;
    case '-':
      resultado = (num1 - num2).toFixed(2);
      break;
    case '*':
      resultado = (num1 * num2).toFixed(2);
      break;
    case '/':
      if (num2 === 0) {
        resultado = 'Operación no válida/indefinida';
      } else {
        resultado = (num1 / num2).toFixed(2);
      }
      break;
    default:
      resultado = 'Operación no válida';
      break;
  }

  return resultado;
}

module.exports = {
  calcular
};