module.exports = {
  simpleJS: ()=>{
  return `;(function(){
    'use strict';

    // your code goes right here
    // If you want to create global variables delete the first and the last lines

})();`;},
  vueJS: ()=>{
  return `var app = new Vue({
    el: '#app',
    data: function(){
      return {
        message: 'Hello World!'
      }
    }
  })`;
  },
  reactJS: ()=>{
    return `'use strict';

  const e = React.createElement;
  
  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return 'You liked this.';
      }
  
      return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      );
    }
  }
  
  const domContainer = document.querySelector('#like_button_container');
  ReactDOM.render(e(LikeButton), domContainer);`;
  },
  gamebase: ()=>{
    return `;(function() {
    // Make shure requestAnimationFrame function is available throw browsers
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

	// Canvas & ctx
    let canvas = document.getElementById('screen');
	var ctx = canvas.getContext('2d');

	// background music
	let backtrack = document.getElementById("backtrack");

	// screen data
    let screen = {
    	w: canvas.clientWidth,
    	h: canvas.clientHeight,
    	// screen center coordinates (x , y)
    	center: { x: (canvas.clientWidth / 2), y: (canvas.clientHeight / 2) }
    }

    let settings = {
    	// mode to read the sprite to animate:
    	// singleImage will retrieve one image per sprite: walk_r_1.png, walk_r_2.png, walk_r_3.png, walk_r_4.png, etc
    	// spriteSheet will look up for coordinates inside one and only one image for each animation: walk_r_sprite.png
    	spritesMode: 'singleImage',
    	soundOn: true,
    	songs: ['assets/audio/babyIFeelLove.mp3','assets/audio/dreamsOfMyLuck.mp3','assets/audio/happySunset.mp3','assets/audio/heatOfTheWorld.mp3','assets/audio/jumpUp.wav','assets/audio/newKindOfHumanity.mp3','assets/audio/strangerOfYou.mp3','assets/audio/timeForYourLife.mp3']
    }

    // some important variables definitions

    // loopcaller variable will call window.requestAnimationFame each time loop function is executed
	let loopcaller;

	// playing state, true: the game is running, false: isn't running
	let playing = false;

	// keys array to control the game
	let keys = { up: { key: "ArrowUp", pressed: false },down: { key: "ArrowDown", pressed: false },left: { key: "ArrowLeft", pressed: false },right: { key: "ArrowRight", pressed: false },enter: { key: "Enter", pressed: false },esc: { key: "Escape", pressed: false },space: { key: " ", pressed: false, done: false, calls: 0 }, w: { key: "w", pressed: false, done: false, calls: 0 },s: { key: "s", pressed: false, done: false, calls: 0 },a: { key: "a", pressed: false, done: false, calls: 0 },d: { key: "d", pressed: false, done: false, calls: 0 } };

	// enemies in the game screen
	// this variable will control the position and resources of each enemy (just repeat the pattern for each one)
	// here we create an array with the data of each enemy
	// each enemy and the player data will be available at member[position].attribute
	// this is a member template to use as constructor
	function Member(){
		// actions the enemy can perform and the sprites paths
		this.actions = {
			'stand': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'bend': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'jumpUp': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'jumpDown': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'jumpRight': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'jumpLeft': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'walkUp': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'walkDown': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'walkRight': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'walkLeft': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'runUp': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'runDown': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'runRight': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'runLeft': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'attackUp': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'attackDown': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'attackRight': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'attackLeft': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'defendUp': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'defendDown': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'defendRight': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order'],
			'defendLeft': ['full', '/path', '/to', '/each', '/sprite', 'in/', 'order']
		};
		// pixels the member moves each frame
		this.velocity = 2;
		this.level = 1;
		this.attack = 10;
		this.defense = 5;
		this.health = 100;
		// Animation state
		this.animation = {
			// times per second the sprites changes
			velocity: 4,
			// action to perform
			action: 'stand',
			// actual sprite
			stage: 0,
			// default animation to call if there is not input
			defaultAnimation: 'stand'
		}
		// position in the screen
		this.position = {
			x: 0,
			y: 0
		}
	}

	function keyPressed(e){
        if (e.key == "ArrowUp") {
            keys.up.pressed = true;
        }
        if (e.key == "ArrowDown") {
            keys.down.pressed = true;
        }
        if (e.key == "ArrowLeft") {
            keys.left.pressed = true;
        }
        if (e.key == "ArrowRight") {
            keys.right.pressed = true;
        }
        if (e.key == "Enter") {
            keys.enter.pressed = true;
            if (!playing){
            	console.log("the game starts at " + new Date());
            	playing = true;
                startGame();
            	return;
            }
        }
        if (e.key == "Escape") {
            keys.esc.pressed = true;
            if (playing){
            	console.log("game paused at " + new Date());
                pauseGame();
            }
        }
        if (e.key == " ") {
            keys.space.pressed = true;
            keys.space.done = true;
        }
        if (e.key == "w" || e.key == "W") {
            keys.w.pressed = true;
            keys.w.done = true;
        }
        if (e.key == "s" || e.key == "S") {
            keys.s.pressed = true;
            keys.s.done = true;
        }
        if (e.key == "a" || e.key == "A") {
            keys.a.pressed = true;
            keys.a.done = true;
        }
        if (e.key == "d" || e.key == "D") {
            keys.d.pressed = true;
            keys.d.done = true;
        }
	}

	function keyUnpressed(e){
        if (e.key == "ArrowUp") {
            keys.up.pressed = false;
        }
        if (e.key == "ArrowDown") {
            keys.down.pressed = false;
        }
        if (e.key == "ArrowLeft") {
            keys.left.pressed = false;
        }
        if (e.key == "ArrowRight") {
            keys.right.pressed = false;
        }
        if (e.key == "Enter") {
            keys.enter.pressed = false;
        }
        if (e.key == "Escape") {
            keys.esc.pressed = false;
        }
        if (e.key == " ") {
            keys.space.pressed = false;
            keys.space.done = false;
        }
        if (e.key == "w" || e.key == "W") {
            keys.w.pressed = false;
            keys.w.done = false;
        }
        if (e.key == "s" || e.key == "S") {
            keys.s.pressed = false;
            keys.s.done = false;
        }
        if (e.key == "a" || e.key == "A") {
            keys.a.pressed = false;
            keys.a.done = false;
        }
        if (e.key == "d" || e.key == "D") {
            keys.d.pressed = false;
            keys.d.done = false;
        }
	}

	function clearCanvas(){
        ctx.beginPath();
        ctx.clearRect(0, 0, screen.w, screen.h);
        ctx.closePath();
	}

    function drawImage(src, x, y) {
        let img = new Image();
        img.src = src;
        ctx.beginPath();
        ctx.drawImage(img, x, y);
        ctx.closePath();
    }

	function drawEnemies(/*You can input the coordinates to draw on and the sprite for example*/){
		// whatever you want to draw your enemy
		// you can call this function in a for loop
		// otherwise call each time is required
	}

	function drawPlayer(/*You can input the coordinates to draw on and the sprite for example*/){
		// whatever you want to draw your player
	}

	function drawWorld(){
		// draw the "world" for the game
	}

	function drawWelcome(){
		ctx.textAlign = "center";
		ctx.fillStyle = "#ecf0f1";
		ctx.fillText('GAME_TITLE, by DEVELOPER', screen.center.x, screen.center.y);
		ctx.fillText('Press Enter to play', screen.center.x, screen.center.y + 14);
	}

	function playMusic(){
		if (backtrack.stop()){
			playNextSong();
		}
		backtrack.play()
	}

	function pauseMusic(){}

	function stopMusic(){}

	function startGame(){
		// settings reset
		playMusic();
		loop();
	}

	function pauseGame(){
		pauseMusic();
		playing = false;
		window.cancelAnimationFrame(loopcaller);
		clearCanvas();
		drawWelcome();
	}

	function endGame(){
		stopMusic();
		playing = false;
		window.cancelAnimationFrame(loopcaller);
		clearCanvas();
		drawWelcome();
	}

	// game loop
	// here's where the game runs, all you want to see in the game will be fired from here
	function loop(){

		clearCanvas();
		drawWorld();
		drawPlayer();
		drawEnemies();

		if (playing){
			loopcaller = window.requestAnimationFrame(loop);
		}
		if (false/*here must go a condition to the game over*/){
			endGame();
		}
	}

    // listeners
	window.addEventListener('keydown', keyPressed);
	window.addEventListener('keyup', keyUnpressed);

	drawWelcome();

})();`
  },
gameDevTools: ()=>{
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
  },
expressUserRoute() {
  return `var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
`;
  },
expressIndexRoute() {
  return `var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;`
  },
expressBin() {
  return `#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('express:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
var port = parseInt(val, 10);

if (isNaN(port)) {
  // named pipe
  return val;
}

if (port >= 0) {
  // port number
  return port;
}

return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
if (error.syscall !== 'listen') {
  throw error;
}

var bind = typeof port === 'string'
  ? 'Pipe ' + port
  : 'Port ' + port;

// handle specific listen errors with friendly messages
switch (error.code) {
  case 'EACCES':
  console.error(bind + ' requires elevated privileges');
  process.exit(1);
  break;
  case 'EADDRINUSE':
  console.error(bind + ' is already in use');
  process.exit(1);
  break;
  default:
  throw error;
}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
var addr = server.address();
var bind = typeof addr === 'string'
  ? 'pipe ' + addr
  : 'port ' + addr.port;
debug('Listening on ' + bind);
}`
},
expressAppJS() {
  return `var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;`;
},
}
