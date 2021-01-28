// Our testing framework works great for our synchronous test.What if we had some asynchronous functions that we wanted to test ? We could make our callback functions async, and then use the await keyword to wait for that to resolve, then we can make our assertion on the result and the expected.


const { sumAsync, subtractAsync } = require('../math');

test('sum function adds numbers', async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test('subtract function subtracts numbers', async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});


async function test(title, callback) {
  try {
    await callback();
    console.log(`+ ${title}`);
  } catch (error) {
    console.error(`X ${title}`);
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
