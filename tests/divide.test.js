const divide= require('../files/divide')

test('Divide two numbers = ', () => {
    expect(divide.divide('15,5')).toBe(3);
  });


  test('Divide two -ve numbers = ', () => {
    expect(divide.divide('-15,-3')).toBe(5);
  });
  test('Divide -ve number by +ve = ', () => {
    expect(divide.divide('-15,3')).toBe(-5);
  });
