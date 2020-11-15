const d20_percentage = require('../utils/d20_percentage');

test('Testing returns correct percetage value based on correct data', () => {
  const result = d20_percentage(5, 20);
  expect(result).toBe(30);
});

test('testing returns 5% when can only hit on a 20', () => {
  expect(d20_percentage(0, 20)).toBe(5);
});
test('testing returns 95% when can only miss on a 1', () => {
  expect(d20_percentage(20, 0)).toBe(95);
});
