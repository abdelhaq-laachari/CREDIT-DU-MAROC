const functions = {
  // fetch data from a url endpoint using fetch not axios
  fetchData: async () => {
    const response = await fetch("http://localhost:6000/client/myPayments");
    const data = await response.json();
    return data;
  },
};

module.exports = functions;



// const axios = require('axios')

// const functions = {
//    // fake online rest pai for test
//    fetchData: () =>
//    axios
//      .get('http://localhost:6000/client/myPayments')
//      .then(res => res.data)
//      .catch(err => 'error')
// }

// module.exports = functions;