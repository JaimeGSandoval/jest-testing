/* eslint-disable no-undef */
const bankai = require('./bankai');

describe('Bankai checker', () => {
  test('Checking if the string equals Bankai', () => {
    const result = bankai('Bankai');

    expect(result).toBe('Bankai');
  });
})
