const fs = require('fs')

const { robots, humans } = require('../files/text')
const { resetCSS } = require('../files/css')
const { expressBin, 
  expressAppJS, 
  expressIndexRoute, 
  expressUserRoute, 
  simpleJS } = require('../files/javascript')
const { expressPackageJson } = require('../files/json')

const jquery = require('../downloaders/jquery')

function err(e) {
  console.log(e);
}

const expressApp = {
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
    '/bin',
    '/public',
    '/public/images',
    '/public/js',
    '/public/js/vendor',
    '/public/css',
    '/public/css/vendor',
    '/routes',
    '/views'
  ],
  createFiles: function(projectName){
    let bin = expressBin();
    let robotsTXT = robots();
    let humansTXT = humans();
    let css = resetCSS();
    let js = simpleJS();
    let indexRoute = expressIndexRoute();
    let userRoute = expressUserRoute();
    let indexView = expressIndexView();
    let errorView = expressErrorView();
    let expressJS = expressAppJS();
    let packageJSON = expressPackageJson();

    fs.writeFile(`./${projectName}/bin/www`, bin, err);
    fs.writeFile(`./${projectName}/public/robots.txt`, robotsTXT, err);
    fs.writeFile(`./${projectName}/public/humans.txt`, humansTXT, err);
    fs.writeFile(`./${projectName}/public/css/master.css`, css, err);
    fs.writeFile(`./${projectName}/public/js/main.js`, js, err);
    jquery('3.5.1', false, true, projectName+'/public/js/vendor');
    jquery('3.5.1', false, false, projectName+'/public/js/vendor');
    fs.writeFile(`./${projectName}/routes/index.js`, indexRoute, err);
    fs.writeFile(`./${projectName}/routes/users.js`, userRoute, err);
    fs.writeFile(`./${projectName}/views/index.ejs`, indexView, err);
    fs.writeFile(`./${projectName}/views/error.ejs`, errorView, err);
    fs.writeFile(`./${projectName}/app.js`, expressJS, err);
    fs.writeFile(`./${projectName}/package.json`, packageJSON, err);
  }
}

module.exports = expressApp;
