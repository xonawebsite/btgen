const fs = require('fs');

const expressBin = require('./files/expressbin.js');
const robots = require('./files/robots.js');
const humans = require('./files/humans.js');
const resetCSS = require('./files/resetcss.js');
const simpleJS = require('./files/simplejs.js');
const expressIndexRoute = require('./files/expressindexroute.js');
const expressUserRoute = require('./files/expressuserroute.js');
const expressIndexView = require('./files/expressindexview.js');
const expressErrorView = require('./files/expresserrorview.js');
const expressAppJS = require('./files/expressappjs.js');
const expressPackageJson = require('./files/expresspackagejson.js');

const jquery = require('./downloaders/jquery.js')

function err(err){
  if (err) throw err;
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