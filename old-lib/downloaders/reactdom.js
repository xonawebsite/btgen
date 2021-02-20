const https = require('https');
const fs = require('fs');

module.exports = function reactDOM(minified = true, write = null){
  var uri = minified ? 'https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js' : 'https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js';
  https.get(uri).on('response', function (response) {
    let body = '';
    response.on('data', function (chunk) {
        body += chunk;
    });
    response.on('end', function () {
      if (write != null){
        if (minified){
          fs.writeFileSync(`./${write}/react-dom.production.min.js`, body);
        }else{
          fs.writeFileSync(`./${write}/react-dom.development.js`, body);
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
