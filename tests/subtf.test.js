const subt= require('../files/subtraction')

test('False subt two numbers = ', () => {
    expect(subt.subt('9,3')).toBe(9);
  });


test('False subt two -ve numbers = ', () => {
  expect(subt.subt('-9,-3')).toBe(12);
});

test('False subt -ve and +ve numbers = ', () => {
  expect(subt.subt('-9,3')).toBe(6);
});