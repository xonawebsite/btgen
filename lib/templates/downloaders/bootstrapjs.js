const https = require('https');

module.exports = function bootstrapJs(minified = true, write = null){
  var uri = `https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.${minified ? 'min.' : '' }js`;
  https.get(uri).on('response', function (response) {
      let body = '';
      response.on('data', function (chunk) {
          body += chunk;
      });
      response.on('end', function () {
        if (write != null){
          fs.writeFileSync(`${write}/bootstrap.${minified ? 'min.' : '' }js`, body);
        }else{
          return body;
        }
      });
  });
}
