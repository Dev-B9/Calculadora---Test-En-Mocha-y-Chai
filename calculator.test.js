// El método assert en Mocha y Chai se utiliza para realizar afirmaciones o comprobaciones en el código durante la ejecución de pruebas unitarias.

const assert = require('chai').assert;
const calculator = require('./calculator');

describe('Calculator', function() {
  it('Debe retornar la suma de dos numeros', ()=> {
    assert.equal(calculator.add(6, 3), 9);
  })
  it('Debe retornar la resta de dos numeros', function() {
    assert.equal(calculator.subtract(3, 3), 0);
  });

  it('Debe retornar la multiplicacion de dos numeros', function() {
    assert.equal(calculator.multiplication(1, 5), 5);
  });

  it('Debe retornar la divison de dos numeros', function() {
    assert.equal(calculator.division(10, 3), 3.3);
  });

  it('Debe retornar error al intentar hacer divison de zero', function() {
    assert.equal(calculator.division(5, 0), "No se permite cociente(0) en campo2");
  });

})
