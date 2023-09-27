import operate from './operate';

describe('operate function', () => {
  test.each([
    [2, 3, '+', '5'],
    [5, 3, '-', '2'],
    [2, 3, 'x', '6'],
    [6, 2, '÷', '3'],
    [5, 0, '÷', "Can't divide by 0."],
    [7, 3, '%', '1'],
    [10, 0, '%', "Can't find modulo as can't divide by 0."],
  ])('should perform %s %s %s = %s', (num1, num2, operation, expected) => {
    expect(operate(num1, num2, operation)).toBe(expected);
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate(2, 3, '$')).toThrow("Unknown operation '$'");
  });
});
