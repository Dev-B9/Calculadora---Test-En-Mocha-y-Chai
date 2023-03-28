function add(n1, n2) {
    return n1 + n2;
  }
  
  function subtract(n1, n2) {
    return n1 - n2;
  }
  
  function multiplication(n1, n2) {
    return (n1 * n2).toFixed(1);
  }
  
  function division(n1, n2) {
    if (n2 === 0) {
      return "No se permite cociente(0) en campo2";
    } else {
      return (n1 / n2).toFixed(1);
    }
  }
  
  module.exports = {
    add,
    subtract,
    multiplication,
    division,
  };