const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com/orgs/takenet',
});

module.exports = api;
