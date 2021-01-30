/* eslint-disable no-undef */

const axios = require('axios');

// This will mock the entire axios module. Any call that goes to the axios module will be a mock
// response.
jest.mock('axios'); // mocking entire axios module here

describe("Mock API calls", () => {

  test("Mocking external endpoint in axios", () => {

    // arrange
    const mockedResponse = { data: { username: "test-user", address: "Japan" } };

    // Since axios.get() returns a Promise, mockResolvedValue() must be called. It's used with mock API calls
    axios.get.mockResolvedValue(mockedResponse); // You can mock any http request (post, get, put, patch, delete, etc)
    const app = require('../app.js'); // this must be declared after setting up the mock

    // act
    app.getUserData();

    // assert
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://reqres.in/api/users/2');
  });
});
