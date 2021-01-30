/* eslint-disable no-undef */
describe("Illustrate mocks and spies", () => {

  test("Illustrate spies", () => {

    // arrange
    const greeter = require('../app.js');

    // First parameter for spyOn is the object with the property/method. The second parameter is the name of the property
    const greeterSpy = jest.spyOn(greeter, 'getFullName');

    // act
    const result = greeter.greet('Hatake', 'Kakashi');

    // assert
    console.log(result);
    expect(greeterSpy).toHaveBeenCalled();
    expect(greeterSpy).toHaveBeenCalledWith("hatake", "Kakashi");
  });

  test("Illustrate mocks", () => {

    // arrange
    const greeter = require('../app.js');

    // Example of using a mock
    const mock = jest.fn().mockReturnValue('mocked value'); // This value will substitute the value from the actual function being called, substituting 'mocked value' for 'Hatake Kakashi' ?
    greeter.getFullName = mock;

    // act
    const result = greeter.greet('Hatake', 'Kakashi');

    // assert
    console.log(result);
    expect(result).toBe('Hello there mocked value');
    expect(mock).toHaveBeenCalled(); //
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
