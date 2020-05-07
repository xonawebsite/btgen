const https = require('https'); const fs = require('fs');

let templates ={
	// templates trees from here
	webpageTree: [`./${process.argv[3]}/css`, `./${process.argv[3]}/images`, `./${process.argv[3]}/js`, `./${process.argv[3]}/js/vendor`],
	btwebpageTree: [`./${process.argv[3]}/css`, `./${process.argv[3]}/css/vendor`, `./${process.argv[3]}/images`, `./${process.argv[3]}/js`, `./${process.argv[3]}/js/vendor`],
	webgameTree: [`./${process.argv[3]}/css`, `./${process.argv[3]}/assets`, `./${process.argv[3]}/assets/audio`, `./${process.argv[3]}/assets/sprites`, `./${process.argv[3]}/assets/fonts`, `./${process.argv[3]}/js`, `./${process.argv[3]}/js/vendor`],
	// html templates
	simpleHtml: `<!DOCTYPE html>
<html lang=en>
<head>
	<title>WEB_TITLE</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="css/master.css">
</head>
<body>
	<h1>WEB_TITLE</h1>

	<div id="main"></div>

	<script type="text/javascript" src="js/vendor/jquery-3.5.0.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>`,
	_404Page: `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Page Not Found</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * {
      line-height: 1.2;
      margin: 0;
    }

    html {
      color: #888;
      display: table;
      font-family: sans-serif;
      height: 100%;
      text-align: center;
      width: 100%;
    }

    body {
      display: table-cell;
      vertical-align: middle;
      margin: 2em auto;
    }

    h1 {
      color: #555;
      font-size: 2em;
      font-weight: 400;
    }

    p {
      margin: 0 auto;
      width: 280px;
    }

    @media only screen and (max-width: 280px) {

      body,
      p {
        width: 95%;
      }

      h1 {
        font-size: 1.5em;
        margin: 0 0 0.3em;
      }

    }
  </style>
</head>

<body>

  <!-- 404 page from html5boilerplate downloadable from https://html5boilerplate.com/ -->
  <h1>Page Not Found</h1>
  <p>Sorry, but the page you were trying to view does not exist.</p>
</body>

</html>
<!-- IE needs 512+ bytes: https://blogs.msdn.microsoft.com/ieinternals/2010/08/18/friendly-http-error-pages/ -->
`,
	bootstrapHtml: `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="css/master.css">

    <title>WEB_TITLE</title>
  </head>
  <body>
    <!-- Based on the bootstrap's Starter Tamplate available on: https://getbootstrap.com/docs/4.4/getting-started/introduction/ -->
    <h1>WEB_TITLE</h1>

	<div id="main"></div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/vendor/jquery-3.4.1.slim.min.js"></script>
    <script src="js/vendor/popper.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>`,
	gameBaseHTML: `<!DOCTYPE html>
<html lang="en">
<head>
	<title>GAME_TITLE</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/master.css">
</head>
<body>

	<h1>GAME_TITLE</h1>

	<canvas id="screen">
		Ir you are reading this, you need to upgrade your browser. This game is not supported by your actual browser!
	</canvas>

	<div id="performance">
		<span id="fps"></span><br>
		<span id="keyboard"></span><br>
		<span id="status"></span>
	</div>

	<audio id="backtrack"></audio>

	<script type="text/javascript" src="js/game.js"></script>
	<script type="text/javascript" src="js/devTools.js"></script>

</body>
</html>`,
	// css templates
	resetCSS: `/* 
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com 
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
 margin:0;
 padding:0;
 border:0;
 outline:0;
 font-size:100%;
 vertical-align:baseline;
 background:transparent;
}

body {
 line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
 display:block;
}

nav ul {
 list-style:none;
}

blockquote, q {
 quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
 content:'';
 content:none;
}

a {
 margin:0;
 padding:0;
 font-size:100%;
 vertical-align:baseline;
 background:transparent;
}

/* change colours to suit your needs */
ins {
 background-color:#ff9;
 color:#000;
 text-decoration:none;
}

/* change colours to suit your needs */
mark {
 background-color:#ff9;
 color:#000; 
 font-style:italic;
 font-weight:bold;
}

del {
 text-decoration: line-through;
}

abbr[title], dfn[title] {
 border-bottom:1px dotted;
 cursor:help;
}

table {
 border-collapse:collapse;
 border-spacing:0;
}

/* change border colour to suit your needs */
hr {
 display:block;
 height:1px;
 border:0; 
 border-top:1px solid #cccccc;
 margin:1em 0;
 padding:0;
}

input, select {
 vertical-align:middle;
}

/* User styles */
/* General styles */

/* small screens */

@media (min-width: 576px) {
	/* styles here */
}

/* medium screens */

@media (min-width: 768px) {
	/* styles here */
}

/* large screens */

@media (min-width: 992px) {
	/* styles here */
}

/* extralarge screens */

@media (min-width: 1200px) {
	/* styles here */
}

/* printing styles */

@media print {
	/* styles here */
}

`,
	simpleCSS:`/* User styles */
/* General styles */

/* small screens */

@media (min-width: 576px) {
	/* styles here */
}

/* medium screens */

@media (min-width: 768px) {
	/* styles here */
}

/* large screens */

@media (min-width: 992px) {
	/* styles here */
}

/* extralarge screens */

@media (min-width: 1200px) {
	/* styles here */
}

/* printing styles */

@media print {
	/* styles here */
}

	`,
	gameBaseCss:`#screen{
	background: #2980b9;
	display: block;
	height: 600px;
	margin: 0 auto;
	width: 800px;
}

#backtrack{
	visibility: hidden;
}

#performance{
	border: 1px solid black;
	display: none;
	left: 10px;
	position: absolute;
	top: 10px;
	width: 250px;
}`,
	// txt & md templates
	robotsTXT: `# www.robotstxt.org/

# Allow crawling of all content
User-agent: *
Disallow:
	`,
	humansTXT: `# humanstxt.org/
# The humans responsible & technology colophon

# TEAM => repear for each one in the team

<Your title>: <Your name>.
Site: <email, link to a contact form, etc.>
Twitter: <your Twitter username.>

# THANKS

Name: <name or url>

# TECHNOLOGY COLOPHON

    HTML5, CSS3
    jQuery, Popper.js, Bootstrap

# SITE

Last update: YYYY/MM/DD
Standards: /* Standarts you adopt in the project. Eg: HTML5, CSS3, ECMAScript6 */
Components: /* Frameworks and stuff used to build the site. Eg: jquery, bootstrap */
Software: /* Software used to create the site. Eg: sublime text, google chrome, btgen */`,
	simpleGDD: `# One-page design document
<strong>Important:</strong> 
<ul>
	<li>
		This template was created and shared originally by Game Dev Underground, <a href="https://www.youtube.com/channel/UC_hwKJdF3KRAy4QIaiCSMgQ">youtube channel</a><a href="https://www.gdu.io/">official website</a>.
	</li>
	<li>
		The original template <a href="https://docs.google.com/document/d/1npEvqcMZSp0IX2hWw6Qq0WqJVfmVqS_YOGFWnnwfh-A/edit#">here</a>.
	</li>
</ul>

<h3>Explanation</h3>
<p>
	This is a gdd (game design document) template, which is a powerfull tool to start creating a game.
</p>

<hr>
<h1>Template</h1>

# Game Identity / Mantra: 

List your single sentence description of the game that you will use to guide design decisions. (Example: Stylized action platformer about a meatball fighting the dinner table.)

# Design Pillars:

List up to 3 words/phrases that convey the feeling or emotion you want the player to experience. (Example: Fast. Action-packed. Mayhem.)

# Genre/Story/Mechanics Summary:

List what the game is from a gameplay and/or story perspective. (Example: This game uses a unique swinging rope mechanic to tell a story about what it means to be a meatball...)

# Features: 

List the cool features or unique elements that you want to include in your game.

# Interface: 

List the player input method, the controls, and how the player interacts with your game.

# Art Style: 

Include references to lots of images and games that have a similar aesthetic to what you're trying to achieve. 
Music/Sound: 
Include links to music and sound design similar to What you're trying to achieve. You can also list the emotional responses that the sound should invoke in the player.

# Development Roadmap / Launch Criteria: 

<strong>Platform:</strong> Steam/Google Play/iOS/Web.
<strong>Audience:</strong> Age/gender/interests.
<strong>Milestone 1:</strong> Mechanics complete - 0/0/00
<strong>Milestone 2:</strong> Boss fights complete - 0/0/00
<strong>Milestone 3:</strong> Levels complete -  0/0/00
<strong>Milestone 4:</strong> Polish complete - 0/0/00
---------------------------
Launch Day: 0/0/00

<hr>
Special thanks to Josehzz. Made with love by http://gdu.io
© 2017 Game Dev Underground. Free to use/modify/distribute under CC 4.0.
`,
	// This one is unfinished right now, TODO: Complete for the next update
	complexGDD: `<h1>GAME DESIGN DOCUMENT</h1>
<hr>

This is your game design document, feel free to delete all you won't need.

In general terms this may be very helpfull to create not just the code for the game, will allow you to achieve an awesome game base.

# CONCEPT
<hr>

<ul>
	<li><strong>Title</strong>: the title and subtitle for your game, if don't go <a href="www.namelix.com">Namelix</a>.</li>
	<li><strong>Designer</strong>: your name | github user name | nickname | whatever you want.</li>
	<li><strong>Platform(s)</strong>: platform you will use to distribute the game. Eg: Web/online.</li>
	<li><strong>Document Version</strong>: 001</li>
	<li><strong>Gameplay & Content Overview</strong>: describe the content and feel for your game in two paragraphs.</li>
	<li><strong>Category</strong>: Action | zelda-like | strategy | etc. You can compare your game with others.</li>
	<li><strong>License</strong>: will you need permisions/attribution? is your game an original one? HISTORY & RESOURCES INCLUDED.</li>
	<li><strong>Mechanics</strong>: how the game works, what are the controls, objectives... what does/doesn't the player do</li>
	<li><strong>Technology</strong>: what do you need to build the game, (hardware and software) including program language(s)</li>
	<li><strong>Public</strong>: who's the game for? can you describe a specific public for it like childrens from 9 to 14?</li>
</ul>

# VERSIONS HISTORY
<hr>

Each time you write a new version of this document, be shure to resume the previous version here.

<h3>000.1</h3>
<p>Resume sample for prev version</p>

# GAME OVERVIEW
<hr>

Try to throw the vision of your game, what's the goal, all interesting things to discover, and all that stuff.

# GAME MECHANICS
<hr>

Describe what can the player do in the game, how can do it, where can go, best in the game's secuence. If you can, describe each function itself.

<ul>
	<li><strong>Camera</strong>: Describe the camera perpective you will use, 2d, 3d, isometric, first person, top-view, etc.</li>
	<li><strong>Controls</strong>: Describe the peripherics needed to play and the buttons and keys the player will need to perform actions and that stuff</li>
	<li><strong>Score</strong>: How will you manage scores, levels achievements, local or online?</li>
	<li><strong>Save/Charge</strong>: how can the player save and load the progress in the game</li>
</ul>

# GAME STATES
<hr>

How many, wich states will have the game? Examples bellow: <br>
Next to the state name, try to describe how can the player go there, how it execute, what it shows, etc.
<ul>
	<li>Game menu</li>
	<li>Pause Menu</li>
	<li>Multiplayer menu</li>
	<li>Playing state</li>
</ul>

# INTERFACES
<hr>

Describe the interactivity with the game, the look & feel (colors, styles, theme), for each interface create other description like the following:

<ul>
	<li><strong>Name</strong>: a name for this interface</li>
	<li><strong>Description</strong>: what is this interface for</li>
	<li><strong>States</strong>: Which states can be access from this interface</li>
</ul>

# LEVELS
<hr>
Describe completely each level as much you can.

<ul>
	<li><strong>Level title</strong>: A name for the level</li>
	<li><strong>Meeting</strong>: How did the player get here? Is this the first level, a tutorial, a bonus, when will the player get here?</li>
	<li><strong>Description</strong>: describe the level shortly</li>
	<li><strong>Objectives</strong>: what should the player do here? what happens when the level ends?</li>
	<li><strong>Enemies</strong>: list the enemies the level have, if have</li>
	<li><strong>Items</strong>: list all items this level have, specify if enemies or just the player can use it</li>
	<li><strong>Characters</strong>: which characters appears here and what do they do?</li>
	<li><strong>Music & Sound Effects</strong>: Describe the music and sound effects for this level</li>
	<li><strong>References</strong>: write the references for the music and the sound FX in this level, the rights of it and that stuff</li>
</ul>

# GAME PROGRESS
<hr>

List sequentially or using a flowchart every event or levels which the user must to achieve to progress 
<ul>
	<li></li>
</ul>

# Characters
<hr>

<ul>
	<li></li>
</ul>

# ENEMIES
<hr>

<ul>
	<li></li>
</ul>

# HABILITIES
<hr>

<ul>
	<li></li>
</ul>

# WEAPONS
<hr>

<ul>
	<li></li>
</ul>

# ITEMS
<hr>

<ul>
	<li></li>
</ul>

# GUIDE
<hr>

<ul>
	<li></li>
</ul>

# ACHIVEMENTS
<hr>

<ul>
	<li></li>
</ul>

# SECRET CODES
<hr>

<ul>
	<li></li>
</ul>

# MUSIC & SOUNDS
<hr>

<ul>
	<li></li>
</ul>

# TEAM MEMBERS
<hr>

<ul>
	<li></li>
</ul>

# PRODUCTION DETAILS
<hr>

<ul>
	<li></li>
</ul>

`,
	// javascript templates
	gameBaseJS: `;(function() {
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

})();`,
	gameDevToolsJS: `// here you can create development tools like a FPS rating showing script
// this is a simple log registry for debug your game:
function log(data){
	console.log(data);
}

// you can call this function from any place in your game.js file, it will save a temporal registry with all you want
// an exampĺe can be this: log(new Data() + ': The player is in ' + player.position;
`,
	simpleJS: '$("#main").text("Hello World!");',
	JQuery: (p)=>{
		https.get('https://code.jquery.com/jquery-3.5.0.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/jquery-3.5.0.js`, body);
		    });
		});
	},
	JQueryMin: (p)=>{
		https.get('https://code.jquery.com/jquery-3.5.0.min.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/jquery-3.5.0.min.js`, body);
		    });
		});
	},
	BootstrapJS: (p)=>{
		https.get('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/bootstrap.min.js`, body);
		    });
		});
		https.get('https://code.jquery.com/jquery-3.4.1.slim.min.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/jquery-3.4.1.slim.min.js`, body);
		    });
		});
		https.get('https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/popper.min.js`, body);
		    });
		});
	},
	Bootstrap: (p)=>{
		https.get('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/bootstrap.min.css`, body);
		    });
		});
	},
	// sample data
	gameBaseMusic: (p)=>{
		let filenames= ['babyIFeelLove.mp3','dreamsOfMyLuck.mp3','happySunset.mp3','heatOfTheWorld.mp3','jumpUp.wav','newKindOfHumanity.mp3','strangerOfYou.mp3','timeForYourLife.mp3']
		let urls = ['https://opengameart.org/sites/default/files/Baby%2C%20I%20Feel%20Love_1.mp3', 'https://opengameart.org/sites/default/files/Dreams%20of%20my%20luck.mp3', 'https://opengameart.org/sites/default/files/Happy%20Sunset%20Normalized.mp3', 'https://opengameart.org/sites/default/files/Heat%20Of%20The%20World%20full%20song.mp3', 'https://opengameart.org/sites/default/files/Jump%20Up%20-%20Otoniel%20Reyes.wav', 'https://opengameart.org/sites/default/files/New%20Kind%20Of%20Humanity.mp3', 'https://opengameart.org/sites/default/files/Stranger%20Of%20You.mp3', 'https://opengameart.org/sites/default/files/Time%20For%20Your%20Life.mp3'];
		for (i = 0; i < urls.length; i++){
			https.get(urls[i]).on('response', function (response) {
			    let body = '';
			    response.on('data', function (chunk) {
			        body += chunk;
			    });
			    response.on('end', function () {
			    	fs.writeFileSync(`${p}/${filenames[i]}`, body);
			    });
			});
		}
	}
}

module.exports = templates;