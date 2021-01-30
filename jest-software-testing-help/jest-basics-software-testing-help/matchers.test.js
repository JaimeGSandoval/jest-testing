/* eslint-disable no-undef */

// EQUALITY MATCHERS
//These are the most commonly used matchers.They are used for checking equality or inequality and is //mostly used for arithmetic operations.

// Here we have written 2 matchers using toBe and not.toBe which are analogous to equals and not equals.
test("equality matchers", () => {
  expect(2 * 2).toBe(4);
  expect(4 - 2).not.toBe(1);
});


// TRUTHINESS MATCHERS
// Here we will see, matchers for null, falsy, and truthy i.e.false and truth values.It’s important to note that anything that’s not logically true is falsy.
test("truthy operators", () => {
  var name = "Software testing help";
  var n = null;
  expect(n).toBeNull();
  expect(name).not.toBeNull();

  // name has a valid value
  expect(name).toBeTruthy();

  //fail - as null is non success
  // expect(n).toBeTruthy();

  // pass - null treated as false or negative
  expect(n).toBeFalsy();

  // 0 - treated as false
  expect(0).toBeFalsy();
});

// NUMBER MATCHERS
// These matchers could be used for general arithmetic operations.
// For example, greaterThan, lessThan, greaterThanOrEqual, etc.
test("numeric operators", () => {

  var num1 = 100;
  var num2 = -20;
  var num3 = 0;

  // greater than
  expect(num1).toBeGreaterThan(10);

  // less than or equal
  expect(num2).toBeLessThanOrEqual(0);

  // greater than or equal
  expect(num3).toBeGreaterThanOrEqual(0);
});

// STRING MATCHERS
// A lot of times we need strings to match a regular expression as an assertion in a Unit test.Jest provides matchers for strings to be matched against a regular expression.
test("string matchers", () => {
  var string1 = "software testing help - a great resource for testers";

  // Should find the word 'testing'
  expect(string1).toMatch(/testing/);

  // test for failure match
  expect(string1).not.toMatch(/abc/);
});


// EXCEPTION MATCHERS
// If you want to test whether a particular function throws an error when it's called, use toThrow
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
