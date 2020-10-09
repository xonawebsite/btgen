const https = require('https');
const fs = require('fs');

module.exports = function vue(minified = true, write = null){
  var uri = minified ? 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js' : 'https://cdn.jsdelivr.net/npm/vue';
  https.get(uri).on('response', function (response) {
    let body = '';
    response.on('data', function (chunk) {
        body += chunk;
    });
    response.on('end', function () {
      if (write != null){
        if (minified){
          fs.writeFileSync(`./${write}/vue.min.js`, body);
        }else{
          fs.writeFileSync(`./${write}/vue.js`, body);
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
