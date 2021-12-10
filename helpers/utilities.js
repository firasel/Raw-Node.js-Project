// dependencies
const crypto = require('crypto');
// module scaffolding
const utilities = {};
const environments  = require('./environments');

// parse JSON String to Object
utilities.parseJSON = (jsonString) => {
  let output = {};

  try {
    output = JSON.parse(jsonString);
  } catch (error) {
    output = {};
  }

  return output;
};

// hash string
utilities.hash = (str) => {
    if(typeof(str) === 'string' && str.length > 0) {
        let hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');

        return hash;
    }
    return false;
  };

module.exports = utilities;
