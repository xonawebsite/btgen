const https = require('https');
const fs = require('fs');

module.exports = function nvkReset(minified = true, write = null){
  var uri = `https://cdn.jsdelivr.net/gh/kenliten/nvk/dist/nvk.reset.${minified ? 'min.' : '' }css`;
  https.get(uri).on('response', function (response) {
      var body = '';
      response.on('data', function (chunk) {
          body += chunk;
      });
      response.on('end', function () {
        if (write != null){
          fs.writeFileSync(`${write}/nvk.reset.${minified ? 'min.' : '' }css`, body);
        }else{
          return body;
        }
      });
      response.on('error', err=>{console.log(err)});
  });
}
