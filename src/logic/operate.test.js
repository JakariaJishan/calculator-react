import operate from './operate';

describe('Test case for the Operate function', () => {
  test('5 + 6 must be equal to 11', () => {
    expect(operate(5, 6, '+')).toEqual('11');
  });
  test('5 - 6 must be equal to 11', () => {
    expect(operate(5, 6, '-')).toEqual('-1');
  });
});
