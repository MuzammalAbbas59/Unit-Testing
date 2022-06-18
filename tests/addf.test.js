const add = require('../files/add')

test('False adding two numbers = ', () => {
    expect(add.add('3,5')).toBe(10);
  });