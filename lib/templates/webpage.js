const fs = require('fs');

const { simpleHTML, _404 } = require('../files/html');
const { robots, humans } = require('../files/text');
const simpleCSS = require('../files/css');
const { simpleJS } = require('../files/javascript');

const jquery = require('../downloaders/jquery');
const bootstrapCSS = require('../downloaders/bootstrapjs');
const bootstrapJS = require('../downloaders/bootstrapcss');
const nvkReset = require('../downloaders/nvkreset');

function err(err){
  if (err) throw err;
}

const webpage = {
  help: function(v=false){
    if (v) {
      console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
webpage template help

Description
-------------------------------------------------------------------------------
webpage will generate a brand new website structure with a simple HTML5, CSS &
    JavaScript pre-built boilerplate, all you need to start a new project,
    specially if it's a simple one, like a template or, for instance, a 
    JavaScript app.

Alternative
-------------------------------------------------------------------------------
This template is also available, for shorter, using 
    "btgen web PROJECT_NAME [options]"

Boilerplate Default Structure
-------------------------------------------------------------------------------
PROJECT_NAME
|---css
|   |---vendor
|   |   |---nvk.reset.min.css
|   |---master.css
|---images
|---js
|   |---vendor
|   |   |---jquery-3.5.1.min.js
|   |---main.js
|---404.html
|---humans.txt
|---robots.txt
|---index.html

Available Options
-------------------------------------------------------------------------------
no-ed     Stands for no empty directories, generate the template without empty
              folders, in this boilerplate, the only one empty folder is images

bt        Include bootstrap.min.css and bootstrap.min.js
no-css    Exclude master.css and nvk.reset.min.css
no-jq     Exclude JQuery
no-js     Exclude JavaScript's main file
no-server Exclude server oriented files (robots.txt, humans.txt and 404.html)

    `);
    } else {
      console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
webpage template help

Description
-------------------------------------------------------------------------------
webpage will generate a brand new website structure with a simple HTML5, CSS &
    JavaScript pre-built boilerplate, all you need to start a new project.

Alternative
-------------------------------------------------------------------------------
This template is also available, for shorter, using 
    "btgen web PROJECT_NAME [options]"

Available Options
-------------------------------------------------------------------------------
no-ed     Stands for no empty directories, generate the template without empty
              folders

bt        Include Bootstrap
no-css    Exclude default css
no-jq     Exclude JQuery
no-js     Exclude JavaScript files
no-server Exclude server oriented files

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
    let html = simpleHTML(projectName);
    fs.writeFileSync(`./${projectName}/index.html`, html, err);

    if (!options.includes('no-server')){
      let _404Page = _404(projectName);
      fs.writeFileSync(`./${projectName}/404.html`, _404Page, err);

      let robotsTXT = robots();
      fs.writeFileSync(`./${projectName}/robots.txt`, robotsTXT, err);

      let humansTXT = humans();
      fs.writeFileSync(`./${projectName}/humans.txt`, humansTXT, err);
    }

    if (!options.includes('no-css')){
      let css = simpleCSS();
      fs.writeFileSync(`./${projectName}/css/master.css`, css, err);
      let resetcss = nvkReset();
      fs.writeFileSync(`./${projectName}/css/vendor/nvk.reset.min.css`, resetcss, err);
    }

    if (!options.includes('no-js')){
      let js = simpleJS();
      fs.writeFileSync(`./${projectName}/js/main.js`, js, err);
    }

    if (!options.includes('no-jq')){
      let jq = jquery();
      fs.writeFileSync(`./${projectName}/js/vendor/jquery-3.5.1.min.js`, jq, err);
    }

    if (options.includes('bt')) {
      let btcss = bootstrapCSS();
      fs.writeFileSync(`./${projectName}/css/vendor/bootstrap.min.css`, btcss, err);
      let btjs = bootstrapJS();
      fs.writeFileSync(`./${projectName}/js/vendor/bootstrap.min.js`, btjs, err);
    }
    console.log(`Files successfully created!`);
  }
}

module.exports = webpage;
