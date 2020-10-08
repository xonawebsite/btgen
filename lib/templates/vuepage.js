const fs = require('fs');

const vueHTML = require('./files/vuehtml.js');
const _404 = require('./files/404page.js');
const robots = require('./files/robots.js');
const humans = require('./files/text.js');
const resetCSS = require('./files/resetcss.js');
const vueJS = require('./files/vuejs.js');

const jquery = require('./downloaders/jquery.js')
const vue = require('./downloaders/vue.js');

function err(err){
  if (err) throw err;
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
