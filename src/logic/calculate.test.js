import calculate from './calculate';

describe('calculate function', () => {
  it('should clear the calculator data when "AC" is pressed', () => {
    const result = calculate({ total: 20, next: 10, operation: '+' }, 'AC');
    expect(result).toEqual({ total: 0, next: null, operation: null });
  });

  it('should handle decimal point button press', () => {
    // Pressing "." when there's no existing decimal point
    let result = calculate({ total: null, next: '7', operation: null }, '.');
    expect(result).toEqual({ total: null, next: '7.', operation: null });

    // Pressing "." when next already contains a decimal point should do nothing
    result = calculate({ total: null, next: '2.718', operation: null }, '.');
    expect(result).toEqual({ total: null, next: '2.718', operation: null });
  });

  it('should handle "+/-" button press', () => {
    // Pressing "+/-" when there's next
    let result = calculate({ total: null, next: '8', operation: null }, '+/-');
    expect(result).toEqual({ total: null, next: '-8', operation: null });

    // Pressing "+/-" when there's total
    result = calculate({ total: '15', next: null, operation: null }, '+/-');
    expect(result).toEqual({ total: '-15', next: null, operation: null });
  });
});
