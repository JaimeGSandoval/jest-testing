const { sum, subtract } = require('../math');

test('sum function adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test('subtract function subtracts numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});


// OUR TEST UTILITY FUNCTION'S JOB IS TO QUICKLY IDENTIFY WHAT'S BROKEN SO THAT IT CAN BE FIXED QUICKLY
// WE DO THAT BY HAVING A MORE HELPFUL ERROR MESSAGE AND BY RUNNING ALL THE TESTS IN OUR FILE
function test(title, callback) {
  try {
    callback();
    console.log(`yay ${title}`);
  } catch (error) {
    console.error(`aww ${title}`);
    console.error(error);
  }
}


function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  }
}
