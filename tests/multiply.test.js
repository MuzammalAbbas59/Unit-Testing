const mult= require('../files/multiply')

test('multiply two numbers = ', () => {
    expect(mult.mult('3,5')).toBe(15);
  });

  test('multiply two -ve numbers = ', () => {
    expect(mult.mult('3,5')).toBe(15);
  });


 test('multiply -ve number with +ve = ', () => {
    expect(mult.mult('-3,5')).toBe(-15);
  });
