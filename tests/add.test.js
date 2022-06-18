const add = require('../files/add')

test('adding two numbers = ', () => {
    expect(add.add('3,5')).toBe(8);
  });


  test('adding -ve and -ve numbers = ', () => {
    expect(add.add('-2,-1')).toBe(-3);
  });

  test('adding -ve and +ve numbers = ', () => {
    expect(add.add('-2,10')).toBe(8);
  });
