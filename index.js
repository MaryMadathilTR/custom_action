const request = require('request');

async function run() {
  try {
    request('http://example.com', function (error, response, body) {
      if (error) {
        console.error('Request failed:', error);
      } else {
        console.log('Response:', body);
      }
    });
  } catch (error) {
    console.error(`Action failed with error: ${error.message}`);
  }
}

run();