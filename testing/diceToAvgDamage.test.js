const { expect } = require('@jest/globals');
const fn = require('../utils/parser_utils/diceToAvgDamage');

test('should return equation for average die damage', () => {
  const result = fn('2d6');
  expect(result).toBe(7);
});
