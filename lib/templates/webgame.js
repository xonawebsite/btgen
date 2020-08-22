const fs = require('fs');

const gameHTML = require('./files/gamehtml.js');
const simpleGDD = require('./files/simplegdd.js');
const robotsTXT = require('./files/robots.js');
const humansTXT = require('./files/humans.js');
const gameCSS = require('./files/gamecss.js');
const gamebase = require('./files/gamebase.js');
const gameDevTools = require('./files/gamedevtools.js');
const gameMusic = require('./downloaders/gamemusic.js');

function err(err){
  if (err) throw err;
}

var webgame = {
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
