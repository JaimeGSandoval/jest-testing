const { sum, subtract } = require('../math');

let result, expected;

result = sum(3, 7);
expected = 10;

expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;

expect(result).toBe(expected);


// THIS FUNCTION IS LIKE AN ASSERTION LIBRARY
function expect(actual) {

  // RETURNS AN OBJECT THAT HAS FUNCTIONS FOR DIFFERENT ASSERTIONS THAT WE CAN MAKE ON THAT 'ACTUAL' PARAMETER VALUE
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },

    toEqual(expected) { },

    toBeGreaterThan(expected) { }
  }
}
