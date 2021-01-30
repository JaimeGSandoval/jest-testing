/* eslint-disable no-undef */

// JEST HOOKS - SET UP AND TEARDOWN
// Just like all other xUnit based unit test frameworks, Jest framework also provides hooks for setup and cleanup methods.These hook methods are executed before and after each test in the test suite or before and after the testSuite execution.

// Totally there are 4 hooks that are available to use.

// beforeEach and afterEach: These hooks are executed before and after each test in the test suite.
// beforeAll and afterAll: These hooks are executed just once for each test suite.i.e.if a test suite has 10 tests, then these hooks will just be executed once for every test execution.

const mathOps = require('./calculator.js');

describe("Calculator tests", () => {
  var input1 = 0
  var input2 = 0

  beforeAll(() => {
    console.log("beforeAll called");
  });

  afterAll(() => {
    console.log("afterAll called");
  });
  beforeEach(() => {
    console.log("beforeEach called");
    input1 = 1;
    input2 = 2;
  });
  afterEach(() => {
    console.log("afterEach called");
  });

  test('adding 1 + 2 should return 3', () => {
    // arrange and act
    var result = mathOps.mathOperations.sum(input1, input2)

    // assert
    expect(result).toBe(3);
  });
})
