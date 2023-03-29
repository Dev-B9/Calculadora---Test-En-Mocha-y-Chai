function calcular(n1, n2, operacion) {

  let resultado;

  switch (operacion) {
    case '+':
      resultado = (n1 + n2).toFixed(2);
      break;
    case '-':
      resultado = (n1 - n2).toFixed(2);
      break;
    case '*':
      resultado = (n1 * n2).toFixed(2);
      break;
    case '/':
      if (n2 === 0) {
        resultado = 'Operación no válida/indefinida';
      } else {
        resultado = (n1 / n2).toFixed(2);
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