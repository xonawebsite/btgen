const https = require('https');
const fs = require('fs');

module.exports = function angularjs(minified = true, write = null){
  var uri = minified ? 'https://ajax.googleapis.com/ajax/libs/angularjs/1.8.0/angular.min.js' : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.8.0/angular.js';
  https.get(uri).on('response', function (response) {
    let body = '';
    response.on('data', function (chunk) {
        body += chunk;
    });
    response.on('end', function () {
      if (write != null){
        if (minified){
          fs.writeFileSync(`./${write}/angular.min.js`, body);
        }else{
          fs.writeFileSync(`./${write}/angular.js`, body);
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
