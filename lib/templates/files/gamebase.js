module.exports = function gamebase(){
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
}
