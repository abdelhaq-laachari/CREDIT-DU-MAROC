const axios = require('axios');

const functions = {
    // fetch data from a url endpoint
    fetchData: async () => {
        try {
            const response = await axios.get('http://localhost:6000/client/myPayments');
            const data = response.data;
            return data;
        } catch (error) {
            // handle error
            // console.log(error);
        }
    }
}

module.exports = functions;