const axios = require('axios');

function getUserData() {
  axios.get('https://reqres.in/api/users/2')
    // the response being returned here from the axios.get() is what's getting mocked.
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
}

getUserData();

module.exports = { getUserData };
