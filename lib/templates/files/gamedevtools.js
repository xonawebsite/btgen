module.exports = function gameDevTools(){
  return `// here you can create development tools like a FPS rating showing script
// these are simple log, warn and error functions for debug your game:
function log(data){
	console.log(data);
}

function warn(data){
	console.warn(data);
}

function err(data){
	console.error(data);
}

// you can call this function from any place in your game.js file, it will save a temporal registry with all you want
// an exampĺe can be this: log(new Data() + ': The player is in ' + player.position;
`
}
