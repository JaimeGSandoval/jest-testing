/* eslint-disable no-undef */
const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner

  // JEST HAS A BUILT IN MOCK FUNCTION CALLED jest.fn YOU PROVIDE IT AN IMPLEMENTATION
  // IT KEEPS TRACK OF WHAT ARGUMENTS IT'S CALLED WITH
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')

  expect(winner).toBe('Kent C. Dodds')

  console.log(utils.getWinner.mock);

  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])


  // Because we're calling it two times, we also may want to verify that it's being called with the right things at the right time.We can also say expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Kent C. Dodds', 'Ken Wheeler').On the second time, it's called in the same way.
  // That gives us a fair amount of control.
  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2)

  expect(utils.getWinner).toHaveBeenCalledWith('Kent C. Dodds', 'Ken Wheeler');

  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    'Kent C. Dodds',
    'Ken Wheeler'
  )
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    'Kent C. Dodds',
    'Ken Wheeler'
  )

  // cleanup
  utils.getWinner = originalGetWinner
})
