const fs = require('fs')

const { gameHTML } = require('../files/html')
const { simpleGDD, robots: robotsTXT, humans: humansTXT } = require('../files/text')
const { gameCSS } = require('../files/css');
const { gamebase, gameDevTools } = require('../files/javascript')
const { phaserPackageJson } = require('../files/json')

const gameMusic = require('../downloaders/gamemusic')
const download = require('../downloaders/downloader')
const nvkReset = require('../downloaders/nvkreset')

function err(err){
  if (err) throw err;
}

const webgame = {
  help: function(v=false){
    if (v) {
      console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
webgame template help

Description
-------------------------------------------------------------------------------
webgame will generate the basic structure to build a web-based game including
      some audio assets, a gameloop and some useful variables

Alternative
-------------------------------------------------------------------------------
This template is also available, for shorter, using 
    "btgen game PROJECT_NAME [options]"

Boilerplate Default Structure
-------------------------------------------------------------------------------
PROJECT_NAME
|---css
|   |---vendor
|   |   |---nvk.reset.min.css
|   |---master.css
|---assets
|   |---audio
|   |---sprites
|   |---fonts
|---js
|   |---vendor
|   |---game.js
|   |---devTools.js
|---GDD.md
|---humans.txt
|---robots.txt
|---index.html

Available Options
-------------------------------------------------------------------------------
--no-ed     Stands for no empty directories, generate the template without 
              empty folders

--no-css      Exclude css files
--jq          Include JQuery
--no-js       Exclude JavaScript files
--no-server   Exclude server oriented files (robots.txt and humans.txt)
--aframe      Include aframe engine
--babylon     Include Babylon.js
--phaser      Include Phaser.js
--three       Include Three.js

    `);
    } else {
      console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
webgame template help

Description
-------------------------------------------------------------------------------
webgame will generate the basic structure to build a web-based game

Alternative
-------------------------------------------------------------------------------
This template is also available, for shorter, using 
    "btgen game PROJECT_NAME [options]"

Available Options
-------------------------------------------------------------------------------
--no-ed     Stands for no empty directories, generate the template without 
              empty folders

--no-css      Exclude css files
--jq          Include JQuery
--no-js       Exclude JavaScript files
--no-server   Exclude server oriented files (robots.txt and humans.txt)
--aframe      Include aframe engine
--babylon     Include Babylon.js
--phaser      Include Phaser.js
--three       Include Three.js

    `);
    }
  },
  filledTree: [
    '/css',
    '/css/vendor',
    '/assets',
    '/assets/audio',
    '/js',
    '/js/vendor'
  ],
  tree: [
    '/css',
    '/css/vendor',
    '/assets',
    '/assets/audio',
    '/assets/sprites',
    '/assets/fonts',
    '/js',
    '/js/vendor'
  ],
  createFiles: function(projectName, options = []){
    let html = gameHTML(projectName);
    fs.writeFileSync(`./${projectName}/index.html`, html, err);
    
    if (!options.includes('--no-server')){
      let robots = robotsTXT();
      fs.writeFileSync(`./${projectName}/robots.txt`, robots, err);
      let humans = humansTXT();
      fs.writeFileSync(`./${projectName}/humans.txt`, humans, err);
    }

    if (!options.includes('--no-gdd')){
      let gdd = simpleGDD();
      fs.writeFileSync(`./${projectName}/GDD.md`, gdd, err);
    }

    if (!options.includes('--no-css')){
      let css = gameCSS();
      fs.writeFileSync(`./${projectName}/css/master.css`, css, err);
      nvkReset(true, `./${projectName}/css/vendor`)
    }

    if (!options.includes('--no-js')){
      if (!options.includes('--phaser') || !options.includes('--three') || !options.includes('--babylon') || !options.includes('--aframe')){
        let js = gamebase();
        fs.writeFileSync(`./${projectName}/js/game.js`, js, err);
      }
      
      let devTools = gameDevTools();
      fs.writeFileSync(`./${projectName}/js/devTools.js`, devTools, err);
    }

    if (!options.includes('--no-assets')){
      gameMusic(`./${projectName}/assets/audio`);
    }

    if (options.includes('--phaser')){
      download('https://github.com/photonstorm/phaser/releases/download/v3.24.1/phaser.min.js', `./${projectName}/js/vendor/phaser.min.js`);
      download('https://github.com/photonstorm/phaser/releases/download/v3.24.1/phaser.js', `./${ProjectName}/js/vendor/phaser.js`);
      let json = phaserPackageJson(projectName);
      fs.writeFileSyncSync(`./${projectName}/package.json`, json, err);
    }

    if (options.includes('--three')){
      download('https://threejs.org/build/three.js', `./${projectName}/js/vendor/three.js`);
      download('https://threejs.org/build/three.min.js', `./${projectName}/js/vendor/three.min.js`);
    }

    if (options.includes('--babylon')){
      download('https://cdn.babylonjs.com/babylon.js', `./${projectName}/js/vendor/babylon.js`);
      download('https://cdn.babylonjs.com/babylon.max.js', `./${projectName}/js/vendor/babylon.max.js`);
      download('https://cdn.babylonjs.com/inspector/babylon.inspector.bundle.js', `./${projectName}/js/vendor/babylon.inspector.bundle.js`);
      download('https://cdn.babylonjs.com/gui/babylon.gui.min.js', `./${projectName}/js/vendor/babylon.gui.min.js`);
    }

    if (options.includes('--aframe')){
      download('https://aframe.io/releases/0.9.2/aframe.min.js', `./${projectName}/js/vendor/aframe.min.js`)
      download('https://aframe.io/releases/0.9.2/aframe.js', `./${projectName}/js/vendor/aframe.js`);
    }
  }
}

module.exports = webgame;
