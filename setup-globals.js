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

// SET UP TEST AND EXPECT AS GLOBALS SO THEY CAN BE USED IN ANY FILE.
// USE NODE COMMAND ON TERMINAL WITH REQUIRE
// node --require ./globals-stored.js ./globals-used.js
// IN THIS USAGE IT ./setup-globals.js ./globals.js
global.test = test;
global.expect = expect;
