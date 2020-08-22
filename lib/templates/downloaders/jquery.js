const https = require('https');

module.exports = function jquery(version = '3.5.1', slim = false, minified = true, write = null){
  var uri = `https://code.jquery.com/jquery-${version}.${slim ? 'slim.' : ''}${minified ? 'min.' : '' }js`;
  https.get(uri).on('response', function (response) {
      let body = '';
      response.on('data', function (chunk) {
          body += chunk;
      });
      response.on('end', function () {
        if (write != null){
          fs.writeFileSync(`${write}/jquery-${version}.${slim ? 'slim.' : ''}${minified ? 'min.' : '' }js`, body);
        }else{
          return body;
        }
      });
  });
}
