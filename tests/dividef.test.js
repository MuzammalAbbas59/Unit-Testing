const divide= require('../files/divide')

test('False Divide two numbers = ', () => {
    expect(divide.divide('15,5')).toBe(4);
  });


  test('Divide number by zero = ', () => {
    expect(divide.divide('15,0')).toBe(0);
  });
