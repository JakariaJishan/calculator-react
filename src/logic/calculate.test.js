import calculate from './calculate';

describe('Test case for the calculate function', () => {
  test('should test if = print the result', () => {
    expect(
      calculate(
        {
          total: 5,
          next: 5,
          operation: '-',
        },
        '=',
      ),
    ).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  test('should test if AC print the result', () => {
    expect(
      calculate(
        {
          total: 5,
          next: 5,
          operation: '-',
        },
        'AC',
      ),
    ).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
