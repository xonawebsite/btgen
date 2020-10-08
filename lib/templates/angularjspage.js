const fs = require('fs')

const { vueHTML, _404 } = require('../files/html')
const { robots, humans } = require('../files/text')
const { resetCSS } = require('../files/css')
const { vueJS } = require('../files/javascript')

const jquery = require('../downloaders/jquery')
const vue = require('../downloaders/vue')

function err(e) {
  console.log(e);
}

const vuepage = {
  tree: [
    '/css',
    '/images',
    '/js',
    '/js/vendor'
  ],
  createFiles: function(projectName){
    let html = vueHTML(projectName);
    let _404Page = _404(projectName);
    let robotsTXT = robots();
    let humansTXT = humans();
    let css = resetCSS();
    let js = vueJS();

    fs.writeFile(`./${projectName}/index.html`, html, err);
    fs.writeFile(`./${projectName}/404.html`, _404Page, err);
    fs.writeFile(`./${projectName}/robots.txt`, robotsTXT, err);
    fs.writeFile(`./${projectName}/humans.txt`, humansTXT, err);
    fs.writeFile(`./${projectName}/css/master.css`, css, err);
    fs.writeFile(`./${projectName}/js/main.js`, js, err);
    vue(true, projectName+'/js/vendor');
    vue(false, projectName+'/js/vendor');
    jquery('3.5.1', false, true, projectName+'/js/vendor');
    jquery('3.5.1', false, false, projectName+'/js/vendor');
  }
}

module.exports = vuepage;
