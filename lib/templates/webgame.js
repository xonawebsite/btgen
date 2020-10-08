const fs = require('fs');

const { gameHTML } = require('../files/html');
const { simpleGDD, robots: robotsTXT, humans: humansTXT } = require('../files/text');
const { gameCSS } = require('../files/css');
const { gamebase, gameDevTools } = require('../files/javascript');
const gameMusic = require('../downloaders/gamemusic');

function err(err){
  if (err) throw err;
}

var webgame = {
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
    '/assets',
    '/assets/audio',
    '/assets/sprites',
    '/assets/fonts',
    '/js',
    '/js/vendor'
  ],
  createFiles: function(projectName){
    let html = gameHTML(projectName);
    let gdd = simpleGDD();
    let robots = robotsTXT();
    let humans = humansTXT();
    let css = gameCSS();
    let js = gamebase();
    let devTools = gameDevTools();

    fs.writeFile(`./${projectName}/index.html`, html, err);
    fs.writeFile(`./${projectName}/GDD.md`, gdd, err);
    fs.writeFile(`./${projectName}/robots.txt`, robots, err);
    fs.writeFile(`./${projectName}/humans.txt`, humans, err);
    fs.writeFile(`./${projectName}/css/master.css`, css, err);
    fs.writeFile(`./${projectName}/js/game.js`, js, err);
    fs.writeFile(`./${projectName}/js/devTools.js`, devTools, err);
    gameMusic(`./${projectName}/assets/audio`);
  }
}

module.exports = webgame;
