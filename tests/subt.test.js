const subt= require('../files/subtraction')

test('subt two numbers = ', () => {
    expect(subt.subt('9,3')).toBe(6);
  });