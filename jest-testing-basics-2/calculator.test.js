/* eslint-disable no-undef */
const mathOperations = require('./calculator');


describe("Calculator tests", () => {
  test('Adding 1 + 2 should return 3', () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });

  test('Subtracting 35 - 2 should return 33', () => {
    expect(mathOperations.diff(35, 2)).toBe(33);
  });

  test('Multiplying 5 * 10 should return 50', () => {
    expect(mathOperations.product(5, 10)).toBe(50);
  });
});
