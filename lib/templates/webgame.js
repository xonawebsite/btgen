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
