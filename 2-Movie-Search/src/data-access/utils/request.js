const axios = require('axios').default;
const axiosRetry = require('axios-retry');

axios.defaults.withCredentials = true;
axiosRetry(axios, { retries: 3 });

module.exports = axios;
