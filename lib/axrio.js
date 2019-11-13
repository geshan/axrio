const axios = require('axios');
const cheerio = require('cheerio');

async function getPage(url, timeout=1000) {
  const response = await axios.get(url, { timeout });
  return cheerio.load(response.data);
}

module.exports = {
  getPage,
};
