const fs = require('fs')

const html = require('../files/html')
const css = require('../files/css')
const text = require('../files/text')
const javascript = require('../files/javascript')
const json = require('../files/json')

const download = require('../downloaders/downloader')
const jquery = require('../downloaders/jquery')
const popper = require('../downloaders/popper')
const bootstrapCSS = require('../downloaders/bootstrapcss')
const bootstrapJS = require('../downloaders/bootstrapjs')
const nvkReset = require('../downloaders/nvkreset')
const angularjs = require('../downloaders/angularjs')
const vue = require('../downloaders/vue')
const react = require('../downloaders/react')
const reactDOM = require('../downloaders/reactdom')

const electronapp = {
  help: function(v=false){
    if (v) {
      console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
electronapp template help

Description
-------------------------------------------------------------------------------
electronapp       generate a simple electron application with pouchDB

Alternative
-------------------------------------------------------------------------------
This template is also available, for shorter, using 
    "btgen electron PROJECT_NAME [options]"
    "btgen electronjs PROJECT_NAME [options]"

Boilerplate Default Structure
-------------------------------------------------------------------------------
PROJECT_NAME
|---app
|   |---assets
|   |   |---fonts
|   |   |---graphics
|   |   |---json
|   |---lib
|   |   |---vendor
|   |   |   |---pouchdb.js
|   |   |   |---pouchdb-7.2.1.min.js
|   |   |---helper.js
|   |---scripts
|   |   |---vendor
|   |   |   |---jquery-3.5.1.min.js
|   |   |---behavior.js
|   |---styles
|   |   |---vendor
|   |   |   |---nvk.reset.min.css
|   |   |---master.css
|   |---index.html
|   |---index.js
|---build
|---package.json

Available Options
-------------------------------------------------------------------------------
--no-ed       Avoid empty directories generation

--bt          Include bootstrap.min.css and bootstrap.min.js
--no-css      Exclude master.css and nvk.reset.min.css
--no-js       Exclude default javascript
--no-jq       Exclude JQuery

    `);
    } else {
    }
  },
  filledTree: [
    '/app',
    '/app/lib',
    '/app/lib/vendor',
    '/app/scripts',
    '/app/scripts/vendor',
    '/app/styles',
    '/app/styles/vendor'
  ],
  tree: [
    '/app',
    '/app/assets',
    '/app/assets/fonts',
    '/app/assets/graphics',
    '/app/assets/json',
    '/app/lib',
    '/app/lib/vendor',
    '/app/scripts',
    '/app/scripts/vendor',
    '/app/styles',
    '/app/styles/vendor',
    '/build'
  ],
  createFiles: function(projectName, options = []){
    let home, js, styles;

    if (options.includes('--angular')){
      home = html.angularHTML(projectName);
      fs.writeFileSync(`./${projectName}/app/index.html`, home)

      js = javascript.angularjsApp();
      fs.writeFileSync(`./${projectName}/app/scripts/app.js`, js);

      let controller = angularjsMainController(projectName);
      fs.writeFileSync(`./${projectName}/app/scripts/MainController.js`, controller);

      angularjs(true, `./${projectName}/app/scripts/vendor`);
      angularjs(false, `./${projectName}/app/scripts/vendor`);
    }

    if (options.includes('--react')){
      home = html.reactHTML(projectName);
      fs.writeFileSync(`./${projectName}/app/index.html`, home)

      js = angularjsApp();
      fs.writeFileSync(`./${projectName}/app/scripts/app.js`, js);

      let controller = angularjsMainController(projectName);
      fs.writeFileSync(`./${projectName}/app/scripts/MainController.js`, controller);

      angularjs(true, `./${projectName}/app/scripts/vendor`);
      angularjs(false, `./${projectName}/app/scripts/vendor`);
    }

    if (options.includes('--vue')){
      home = html.angularHTML(projectName);
      fs.writeFileSync(`./${projectName}/app/index.html`, home)

      js = angularjsApp();
      fs.writeFileSync(`./${projectName}/app/scripts/app.js`, js);

      let controller = angularjsMainController(projectName);
      fs.writeFileSync(`./${projectName}/app/scripts/MainController.js`, controller);

      angularjs(true, `./${projectName}/app/scripts/vendor`);
      angularjs(false, `./${projectName}/app/scripts/vendor`);
    }

    if (options.includes('--game')){
      home = html.angularHTML(projectName);
      fs.writeFileSync(`./${projectName}/app/index.html`, home)

      js = angularjsApp();
      fs.writeFileSync(`./${projectName}/app/scripts/app.js`, js);

      let controller = angularjsMainController(projectName);
      fs.writeFileSync(`./${projectName}/app/scripts/MainController.js`, controller);

      angularjs(true, `./${projectName}/app/scripts/vendor`);
      angularjs(false, `./${projectName}/app/scripts/vendor`);
    }

    if (!options.includes('--angular') || 
        !options.includes('--react') || 
        !options.includes('--vue') || 
        !options.includes('--game')){
      home = html.electronAppHTML(projectName);
      fs.writeFileSync(`./${projectName}/app/index.html`, home);
    }


    if (!options.includes('--no-css')){
      styles = css.simpleCSS();
      fs.writeFileSync(`./${projectName}/app/styles/master.css`, styles);
      if (!options.includes('--bt')){
        nvkReset(true, `./${projectName}/app/styles/vendor`);
      }
    }

    if (!options.includes('--no-jq') || options.includes('--bt')){
      jquery('3.5.1', false, true, `./${projectName}/app/scripts/vendor`);
      jquery('3.5.1', false, false, `./${projectName}/app/scripts/vendor`);
      jquery('3.5.1', true, false, `./${projectName}/app/scripts/vendor`);
      jquery('3.5.1', true, true, `./${projectName}/app/scripts/vendor`);
    }

    if (options.includes('--bt')){
      bootstrapCSS('4.5.2', true, `./${projectName}/app/styles/vendor`);
      bootstrapJS('4.5.2', true, `./${projectName}/app/scripts/vendor`);
      popper('1.16.1', true, `./${projectName}/app/scripts/vendor`);
    }

    if (!options.includes('--no-js')){
      js = javascript.simpleJS();
      fs.writeFileSync(`./${projectName}/app/scripts/behavior.js`, js);
      fs.writeFileSync(`./${projectName}/app/lib/helper.js`, js);
    }

    let pkg = json.electronJson(projectName);
    fs.writeFileSync(`./${projectName}/package.json`, pkg);

    let electronIndexJS = javascript.electronIndexJS();
    fs.writeFileSync(`./${projectName}/app/index.js`, electronIndexJS);

    download('https://cdn.jsdelivr.net/npm/pouchdb@7.2.1/dist/pouchdb.min.js', `./${projectName}/app/lib/vendor/pouchdb-7.2.1.min.js`);
    download('https://cdn.jsdelivr.net/npm/pouchdb@7.2.1/dist/pouchdb.js', `./${projectName}/app/lib/vendor/pouchdb.js`);
  }
}

module.exports = electronapp;
