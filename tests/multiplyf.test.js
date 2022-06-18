const mult= require('../files/multiply')

test('False multiply two numbers = ', () => {
    expect(mult.mult('3,5')).toBe(20);
  });


  test('False multiply -ve number with +ve = ', () => {
    expect(mult.mult('3,-5')).toBe(15);
  });

  