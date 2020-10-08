const fs = require('fs');
const https = require('https');

module.exports = function bootstrap(version = '1.16.0', minified = true, write = null){
  var uri = `https://cdn.jsdelivr.net/npm/popper.js@${version}/dist/umd/popper.${minified ? 'min.' : '' }js`;
  https.get(uri).on('response', function (response) {
      let body = '';
      response.on('data', function (chunk) {
          body += chunk;
      });
      response.on('end', function () {
        if (write != null){
          fs.writeFileSync(`${write}/popper.${minified ? 'min.' : '' }js`, body);
        }else{
          return body;
        }
      });
  }).on('error', err => {
    console.log(err);
    return '';
  });
}
