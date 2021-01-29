// The assert module provides a way of testing expressions. If the expression evaluates to 0, or false,
// an assertion failure is being caused, and the program is terminated.
// This module was built to be used internally by Node.js.

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originalGetWinner = utils.getWinner

// WHAT'S HAPPENING HERE IS CALLED MONKEY PATCHING. WE'RE TAKING THE utils MODULE THAT THE THUMB WAR
// MODULE IS USING AND WE'RE OVERRIDING THE getWinner PROPERTY SO THAT WE CAN MAKE THIS CALL
// DETERMINISTIC FOR OUR TEST

// mock out getWinner by assigning it to a new function
utils.getWinner = (p1, p2) => p1

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
// assert.strictlyEqual checks if two values are equal, using the strict equal operator(===)
assert.strictEqual(winner, 'Kent C. Dodds')

// AN IMPORTANT PART OF MOCKING IS YOU CLEAN UP AFTER YOURSELF SO THAT YOU DON'T IMPACT OTHER
// TESTS THAT MAY NOT WANT TO MOCK THE THING THAT YOU WANT OR MAY WANT TO MOCK IT IN A DIFFERENT WAY
// HERE WE CLEAN UP AFTER OURSELVES TO MAKE SURE THAT OTHER TESTS THAT MAY WANT TO USE THIS THE utils
// MODULE CAN  USE IT IN IT'S UNMODIFIED STATE
utils.getWinner = originalGetWinner
