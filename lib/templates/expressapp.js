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
