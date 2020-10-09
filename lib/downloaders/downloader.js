const https = require('https');
const fs = require('fs');

module.exports = function download(url = '', write = null) {
    https.get(url).on('response', function (response) {
        let body = '';
        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on('end', function () {
            if (write != null) {
                fs.writeFileSync(`${write}`, body);
            } else {
                return body;
            }
        });
        response.on('error', err => {
            console.log(err);
        });
    });
}
