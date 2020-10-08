const fs = require('fs');

const { bootstrapHTML, _404 } = require('../files/html');
const { robots, humans } = require('../files/text');
const { simpleJS } = require('../files/javascript');
const { simpleCSS } = require('../files/css');

const jquery = require('../downloaders/jquery');
const popper = require('../downloaders/popper');
const bootstrapJS = require('../downloaders/bootstrapjs');
const bootstrapCSS = require('../downloaders/bootstrapcss');

function err(e){
  console.log(e);
}

var bootstrap = {
  help: function(v=false){
    if (v) {
      console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
bootstrap template help

Description
-------------------------------------------------------------------------------
bootstrap will generate a brand new website structure with a simple HTML5, CSS 
    & JavaScript pre-built boilerplate, all you need to start a new project,
    including bootstrap's framework files (bootstrap.css, bootstrap.js, popper,
    and jquery)

Alternative
-------------------------------------------------------------------------------
This template is also available, for shorter, using 
    "btgen bt PROJECT_NAME [options]"

Boilerplate Default Structure
-------------------------------------------------------------------------------
PROJECT_NAME
|---css
|   |---vendor
|   |   |---bootstrap.min.css
|   |---master.css
|---images
|---js
|   |---vendor
|   |   |---bootstrap.min.js
|   |   |---jquery-3.5.1.min.js
|   |   |---popper.min.js
|   |---main.js
|---404.html
|---humans.txt
|---robots.txt
|---index.html

Available Options
-------------------------------------------------------------------------------
--no-ed       Stands for no empty directories, generate the template without 
              empty folders, in this boilerplate, the only one empty folder is 
              images

--no-css      Exclude master.css
--no-js       Exclude JavaScript's files
--no-server   Exclude server oriented files (robots.txt, humans.txt & 404.html)

    `);
    } else {
      console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
bootstrap template help

Description
-------------------------------------------------------------------------------
bootstrap will generate a brand new website structure with a simple HTML5, CSS 
    & JavaScript including bootstrap's framework files (bootstrap.css, 
    bootstrap.js, popper, and jquery)

Alternative
-------------------------------------------------------------------------------
This template is also available, for shorter, using 
    "btgen bt PROJECT_NAME [options]"

Available Options
-------------------------------------------------------------------------------
--no-ed       Stands for no empty directories, generate the template without 
              empty folders, in this boilerplate, the only one empty folder is 
              images

--no-css      Exclude master.css
--no-js       Exclude JavaScript's files
--no-server   Exclude server oriented files (robots.txt, humans.txt & 404.html)

    `);
    }
  },
  filledTree: [
    '/css',
    '/css/vendor',
    '/js',
    '/js/vendor'
  ],
  tree: [
    '/css',
    '/css/vendor',
    '/images',
    '/js',
    '/js/vendor'
  ],
  createFiles: function(projectName, options = []){
    let btHTML = bootstrapHTML(projectName);
    fs.writeFile(`./${projectName}/index.html`, btHTML, err);

    if (!options.includes('--no-server')){
      let _404Page = _404(projectName);
      fs.writeFile(`./${projectName}/404.html`, _404Page, err);
     
      let robotsTXT = robots();
      fs.writeFile(`./${projectName}/robots.txt`, robotsTXT, err);
  
      let humansTXT = humans();
      fs.writeFile(`./${projectName}/humans.txt`, humansTXT, err);
    }

    if (!options.includes('--no-js')){
      let js = simpleJS();
      fs.writeFile(`./${projectName}/js/main.js`, js, err);

      let btjs = bootstrapJS();
      fs.writeFile(`./${projectName}/js/vendor/bootstrap.min.js`, btjs, err);

      let jq = jquery('3.5.1', true);
      fs.writeFile(`./${projectName}/js/vendor/jquery-3.5.1.slim.min.js`, jq, err);
      
      let pp = popper();
      fs.writeFile(`./${projectName}/js/vendor/popper.min.js`, pp, err);
    }

    if (!options.includes('--no-css')){
      let css = simpleCSS();
      fs.writeFile(`./${projectName}/css/master.css`, css, err);
    }

    let btcss = bootstrapCSS();
    fs.writeFile(`./${projectName}/css/vendor/bootstrap.min.css`, btcss, err);
  }
}

module.exports = bootstrap;
