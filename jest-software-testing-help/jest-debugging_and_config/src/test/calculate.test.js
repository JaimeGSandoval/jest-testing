/* eslint-disable no-undef */
const mathOps = require('../calculate.js');

describe("Calculator tests", () => {

  test("Add 2 numbers", () => {
    // arrange & act
    // eslint-disable-next-line no-debugger
    const val = mathOps.sum(3, 4);

    // assert
    expect(val).toBe(7);

  });

  test("add 2 numbers to get success response", () => {
    // arrange & act
    const val = mathOps.sum(3, 4);

    // assert
    expect(val).toBe(7);

  });

  test("Divide 2 numbers", () => {
    // arrange & act
    const val = mathOps.divide(6, 2);

    // assert
    expect(val).toBe(7);

  });


  test("Multiply 2 numbers", () => {
    // arrange & act
    const val = mathOps.multiply(5, 2);

    // assert
    expect(val).toBe(10);

  });

  test('subtract two numbers', () => {
    // arrange & act
    const val = mathOps.subtract(9, 6);

    // assert
    expect(val).toBe(3);
  });
});
