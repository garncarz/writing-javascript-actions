const request = require('request-promise');

const options = {
  method: 'GET',
  uri: 'https://icanhazdadjoke.com/',
  headers: {
    Accept: 'application/json',
    'User-Agent':
      "Where do you get those jokes from? Even David Brent wouldn't find them funny."
  },
  json: true
};

async function getJoke() {
  const res = await request(options);
  return res.joke;
}

module.exports = getJoke;
