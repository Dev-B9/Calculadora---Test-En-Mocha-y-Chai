// El método assert en Mocha y Chai se utiliza para realizar afirmaciones o comprobaciones en el código durante la ejecución de pruebas unitarias.

const assert = require('chai').assert;
const calculator = require('./calculator');

describe('Calculator', ()=> {
  it('Debe retornar la suma de dos numeros', ()=> {
    assert.equal(calculator.calcular(6, 3,"+"), 9);
  })
  it('Debe retornar la resta de dos numeros', ()=> {
    assert.equal(calculator.calcular(3, 3,"-"), 0);
  });

  it('Debe retornar la multiplicacion de dos numeros', ()=> {
    assert.equal(calculator.calcular(1, 5,"*"), 5);
  });

  it('Debe retornar la divison de dos numeros', ()=> {
    assert.equal(calculator.calcular(10, 3,"/"), 3.33);
  });

  it('Debe retornar error al intentar hacer divison de cero', ()=> {
    assert.equal(calculator.calcular(5, 0,"/"), "Operación no válida/indefinida");
  });

})
