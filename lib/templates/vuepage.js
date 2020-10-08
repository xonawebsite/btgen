const fs = require('fs')

const { vueHTML, _404 } = require('../files/html')
const { robots, humans } = require('../files/text')
const { resetCSS } = require('../files/css')
const { vueJS } = require('../files/javascript')

const jquery = require('../downloaders/jquery')
const vue = require('../downloaders/vue')

function err(err){
  if (err) throw err;
}

const vuepage = {
  help: function(v=false){
    if (v) {
      console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
vuepage template help

Description
-------------------------------------------------------------------------------
vuepage will generate a vue.js (2) app structure with a simple HTML5, CSS &
    JavaScript pre-built boilerplate, all you need to start a new project.

Alternative
-------------------------------------------------------------------------------
This template is also available, for shorter, using 
    "btgen vue PROJECT_NAME [options]"

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
|   |   |---vue.js
|   |   |---vue.min.js
|   |---main.js
|---404.html
|---humans.txt
|---robots.txt
|---index.html

Available Options
-------------------------------------------------------------------------------
no-ed     Stands for no empty directories, generate the template without empty
              folders, in this boilerplate, the only one empty folder is images

--bt          Include bootstrap.min.css and bootstrap.min.js
--no-css      Exclude master.css and nvk.reset.min.css
--no-jq       Exclude JQuery
--no-server   Exclude server oriented files (robots.txt, humans.txt & 404.html)

    `);
    } else {
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
