const fs = require('fs')

const { angularjsHTML, _404 } = require('../files/html')
const { robots, humans } = require('../files/text')
const { simpleCSS } = require('../files/css')
const { angularjsApp, angularjsMainController } = require('../files/javascript')

const jquery = require('../downloaders/jquery')
const popper = require('../downloaders/popper')
const bootstrapCSS = require('../downloaders/bootstrapcss')
const bootstrapJS = require('../downloaders/bootstrapjs')
const nvkReset = require('../downloaders/nvkreset')
const angularjs = require('../downloaders/angularjs')

function err(e) {
  console.log(e);
}

const angularpage = {
  help: function(v=false){
    if (v) {
      console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
angularpage template help

Description
-------------------------------------------------------------------------------
angularpage       generate a simple angularJS project with a simple HTML, CSS
                      & JavaScript structure

Alternative
-------------------------------------------------------------------------------
This template is also available, for shorter, using 
    "btgen angular PROJECT_NAME [options]"
    "btgen angularjs PROJECT_NAME [options]"

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
|   |   |---angular.js
|   |   |---angular.min.js
|   |   |---jquery-3.5.1.min.js
|   |---app.js
|   |---MainController.js
|---404.html
|---humans.txt
|---robots.txt
|---index.html

Available Options
-------------------------------------------------------------------------------
--no-ed   Stands for no empty directories, generate the template without empty
              folders, in this boilerplate, the only one empty folder is images

--bt          Include bootstrap.min.css and bootstrap.min.js
--no-css      Exclude master.css and nvk.reset.min.css
--no-js       Exclude default javascript
--no-jq       Exclude JQuery
--no-server   Exclude server oriented files (robots.txt, humans.txt & 404.html)

    `);
    } else {
      console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
angularpage template help

Description
-------------------------------------------------------------------------------
angularpage       generate a simple angularJS project with a simple HTML, CSS
                      & JavaScript structure

Alternative
-------------------------------------------------------------------------------
This template is also available, for shorter, using 
    "btgen angular PROJECT_NAME [options]"
    "btgen angularjs PROJECT_NAME [options]"

Available Options
-------------------------------------------------------------------------------
--no-ed   Stands for no empty directories, generate the template without empty
              folders, in this boilerplate, the only one empty folder is images

--bt          Include bootstrap.min.css and bootstrap.min.js
--no-css      Exclude master.css and nvk.reset.min.css
--no-js       Exclude default javascript
--no-jq       Exclude JQuery
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
    let html = angularjsHTML(projectName);
    fs.writeFileSync(`./${projectName}/index.html`, html, err);

    if (!options.includes('--no-server')){
      let _404Page = _404(projectName);
      fs.writeFileSync(`./${projectName}/404.html`, _404Page, err);
      let robotsTXT = robots();
      fs.writeFileSync(`./${projectName}/robots.txt`, robotsTXT, err);
      let humansTXT = humans();
      fs.writeFileSync(`./${projectName}/humans.txt`, humansTXT, err);
    }

    if (!options.includes('--no-css')){
      let css = simpleCSS();
      fs.writeFileSync(`./${projectName}/css/master.css`, css, err);
      if (!options.includes('--bt')){
        nvkReset(true, `./${projectName}/css/vendor`);
      }
    }

    if (!options.includes('--no-js')){
      let js = angularjsApp();
      fs.writeFileSync(`./${projectName}/js/app.js`, js, err);
      let controller = angularjsMainController(projectName);
      fs.writeFileSync(`./${projectName}/js/MainController.js`, controller, err);
    }

    if (!options.includes('--no-jq') || options.includes('--bt')){
      jquery('3.5.1', false, true, `./${projectName}/js/vendor`);
      jquery('3.5.1', false, false, `./${projectName}/js/vendor`);
    }

    if (options.includes('--bt')){
      bootstrapCSS('4.4.1', true, `./${projectName}/css/vendor`);
      bootstrapJS('4.4.1', true, `./${projectName}/js/vendor`);
      popper('1.16.0', true, `./${projectName}/js/vendor`);
    }

    angularjs(true, `./${projectName}/js/vendor`);
    angularjs(false, `./${projectName}/js/vendor`);
  }
}

module.exports = angularpage;
