const fs = require('fs')

const { reactHTML, _404 } = require('../files/html')
const { robots, humans } = require('../files/text')
const { resetCSS } = require('../files/css')
const { reactJS } = require('../files/javascript')

const jquery = require('../downloaders/jquery')
const react = require('../downloaders/react')
const reactDOM = require('../downloaders/reactdom')

function err(e){
  console.log(e);
}

const reactpage = {
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
