// THIS IS THE MOST FUNDAMENTAL FORM OF A TEST. IT'S SIMPLY CODE THAT THROWS AN ERROR WHEN THE RESULT IS NOT
// SOMETHING WE EXPECT.

// THE JOB OF TESTING FRAMEWORKS IS TO MAKE THE ERROR MESSAGE AS USEFUL AS POSSIBLE SO WE CAN QUICKLY IDENTIFY
// IT AND FIX IT

// TO RUN TESTS FROM THE COMMAND LINE WITH NODE TYPE: "node path/to/file.js" NO QUOTATION MARKS
// "node lessons/simple.js"

const { sum, subtract } = require('./math')

let result, expected

console.log("Adjust math.js to pass the test.")
result = sum(3, 7)
expected = 10
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(7, 3)
expected = 4
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}


let result2 = sum(3, 7);
let expected2 = 10;

result2 = subtract(7, 3);
expected2 = 4;

if (result2 !== expected2) {
  throw new Error(`${result} is not equal to ${expected2}`);
}
