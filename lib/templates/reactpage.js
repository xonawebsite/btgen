const fs = require('fs');

const reactHTML = require('../files/reacthtml.js.js');
const _404 = require('../files/404page.js.js');
const robots = require('../files/robots.js.js');
const humans = require('../files/text.js');
const resetCSS = require('../files/resetcss.js.js');
const reactJS = require('../files/reactjs.js.js');

const jquery = require('../downloaders/jquery.js.js')
const react = require('../downloaders/react.js.js');
const reactDOM = require('../downloaders/reactdom.js.js');

function err(err){
  if (err) throw err;
}

const reactpage = {
  tree: [
    '/css',
    '/images',
    '/js',
    '/js/vendor'
  ],
  createFiles: function(projectName){
    let html = reactHTML(projectName);
    let _404Page = _404(projectName);
    let robotsTXT = robots();
    let humansTXT = humans();
    let css = resetCSS();
    let js = reactJS();

    fs.writeFile(`./${projectName}/index.html`, html, err);
    fs.writeFile(`./${projectName}/404.html`, _404Page, err);
    fs.writeFile(`./${projectName}/robots.txt`, robotsTXT, err);
    fs.writeFile(`./${projectName}/humans.txt`, humansTXT, err);
    fs.writeFile(`./${projectName}/css/master.css`, css, err);
    fs.writeFile(`./${projectName}/js/main.js`, js, err);
    react(true, projectName+'/js/vendor');
    react(false, projectName+'/js/vendor');
    reactDOM(true, projectName+'/js/vendor');
    reactDOM(false, projectName+'/js/vendor');
    jquery('3.5.1', false, true, projectName+'/js/vendor');
    jquery('3.5.1', false, false, projectName+'/js/vendor');
  }
}

module.exports = reactpage;
