const { expect } = require('@jest/globals');
const parser = require('../utils/parser');

test('should output damage result', () => {
  const result = parser('2d6+2d8+1d20+1');
  const expected = 7 + 9 + 10.5 + 1;
  expect(result).toBe(expected);
});
test('should output string converted to number', () => {
  const result = parser('1124');
  expect(result).toBe(1124);
});
