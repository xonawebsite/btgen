const https = require('https');
const fs = require('fs');

module.exports = function react(minified = true, write = null){
  var uri = minified ? 'https://unpkg.com/react@16.13.1/umd/react.production.min.js' : 'https://unpkg.com/react@16.13.1/umd/react.development.js';
  https.get(uri).on('response', function (response) {
    let body = '';
    response.on('data', function (chunk) {
        body += chunk;
    });
    response.on('end', function () {
      if (write != null){
        if (minified){
          fs.writeFileSync(`./${write}/react.production.min.js`, body);
        }else{
          fs.writeFileSync(`./${write}/react.development.js`, body);
        }
      }else{
        return body;
      }
    });
    response.on('error', err => {
      console.log(err);
    });
  });
}
