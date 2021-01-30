function greet(firstName, lastName) {
  return "Hello there " + this.getFullName(firstName, lastName);
}

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

module.exports = { greet, getFullName };
