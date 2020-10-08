const fs = require('fs');

const { bootstrapHTML, _404 } = require('../files/html');
const { robots, humans } = require('../files/text');
const { simpleJS } = require('../files/javascript');
const { simpleCSS } = require('../files/css');

const jquery = require('../downloaders/jquery');
const popper = require('../downloaders/popper');
const bootstrapJS = require('../downloaders/bootstrapjs');
const bootstrapCSS = require('../downloaders/bootstrapcss');

function err(err){
  if (err) throw err;
}

var bootstrap = {
  tree: [
    '/css',
    '/css/vendor',
    '/images',
    '/js',
    '/js/vendor'
  ],
  createFiles: function(project){
    let btHTML = bootstrapHTML(project);
    let _404Page = _404(project);
    let robotsTXT = robots();
    let humansTXT = humans();
    let js = simpleJS();
    let css = simpleCSS();
    let btjs = bootstrapJS();
    let btcss = bootstrapCSS();
    let jq = jquery('3.5.1', true);
    let popp = popper();

    fs.writeFile(`./${project}/index.html`, btHTML, err);
    fs.writeFile(`./${project}/404.html`, _404Page, err);
    fs.writeFile(`./${project}/robots.txt`, robotsTXT, err);
    fs.writeFile(`./${project}/humans.txt`, humansTXT, err);
    fs.writeFile(`./${project}/css/master.css`, css, err);
    fs.writeFile(`./${project}/js/main.js`, js, err);
    fs.writeFile(`./${project}/css/vendor/bootstrap.min.css`, btcss, err);
    fs.writeFile(`./${project}/js/vendor/bootstrap.min.js`, btjs, err);
    fs.writeFile(`./${project}/js/vendor/popper.min.js`, popp, err);
    fs.writeFile(`./${project}/js/vendor/jquery-3.5.1.slim.min.js`, jq, err);
  }
}

module.exports = bootstrap;
