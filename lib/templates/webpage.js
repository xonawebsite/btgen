const fs = require('fs');

const simpleHTML = require('./templates/files/simplehtml.js');
const _404 = require('./templates/files/404page.js');
const robots = require('./templates/files/robots.js');
const humans = require('./templates/files/humans.js');
const resetCSS = require('./templates/files/resetcss.js');
const simpleJS = require('./templates/files/simplejs.js');

const webpage = {
  tree: [
    '/css',
    '/images',
    '/js',
    '/js/vendor'
  ],
  createFiles: function(projectName){
    fs.writeFile(`./${projectName}/index.html`, simpleHTML(), (err)=>{
      if (err) throw err;
    });
    fs.writeFile(`./${projectName}/404.html`, _404(), (err)=>{
      if (err) throw err;
    });
    fs.writeFile(`./${projectName}/robots.txt`, robots(), (err)=>{
      if (err) throw err;
    });
    fs.writeFile(`./${projectName}/humans.txt`, humans(), (err)=>{
      if (err) throw err;
    });
    fs.writeFile(`./${projectName}/css/master.css`, resetCSS(), (err)=>{
      if (err) throw err;
    });
    fs.writeFile(`./${projectName}/js/main.js`, simpleJS(), (err)=>{
      if (err) throw err;
    });
  }
}

module.exports = webpage;
