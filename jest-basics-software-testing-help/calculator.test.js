/* eslint-disable no-undef */

// IMPORTING THE JAVASCRIPT FUNCTIONS
const mathOps = require('./calculator.js');


// HAVING ARRANGE AND ACT ON ONE LINE AND HAVING THE ASSERTION ON ANOTHER IS THE PREFERRED WAY OF DOING THINGS, BUT IF IT'S A SIMPLE TEST YOU CAN PUT THE ARRANGE, ACT AND ASSERT ON ONE LINE TOGETHER

describe("Calculator tests", () => {
  test('Adding 1 + 2 should return 3', () => {

    // arrange & act
    const val = mathOps.mathOperations.sum(1, 2);

    // assert
    expect(val).toBe(3);
  });

  test('Subtracting 35 - 2 should return 33', () => {

    // arrange & act
    const val = mathOps.mathOperations.diff(35, 2);

    // assert
    expect(val).toBe(33);
  });

  test('Multiplying 5 * 10 should return 50', () => {

    // arrange, act & assert
    expect(mathOps.mathOperations.product(5, 10)).toBe(50);
  });

  test('exception matcher', () => {
    expect(mathOps.throwException).toThrow();
    expect(mathOps.throwException).toThrowError();
    expect(mathOps.throwException).toThrowError('Exception!!');
  });
});
