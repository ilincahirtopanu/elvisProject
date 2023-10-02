const app = require('../main');
const saxa = require('saxa');

const ENV = process.env.SAXA_ENV || 'local'

if (ENV === 'local') {
  saxa.local(app, true);
  console.log('\nDev server running.\nOpen browser to http://localhost:3000');
  return;
};

module.exports.main = saxa.production(app, true);
