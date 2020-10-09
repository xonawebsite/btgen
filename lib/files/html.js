module.exports = {
  simpleHTML: (title)=>{
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${title}</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="css/vendor/nvk.reset.min.css">
    <link rel="stylesheet" href="css/master.css">
  </head>
  <body>

    <h1>${title}</h1>

    <script type="text/javascript" src="js/vendor/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

  </body>
</html>`;
  },
  reactHTML: (title)=>{
    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${title}</title>
  
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <link rel="stylesheet" href="css/vendor/nvk.reset.min.css">
      <link rel="stylesheet" href="css/master.css">
    </head>
    <body>
  
      <h1>${title}</h1>
      
      <div id="like_button_container"></div>
  
      <!-- Load React. -->
      <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
      <script src="./js/vendor/react.development.js"></script>
      <script src="./js/vendor/react-dom.development.js"></script>
      
      <script type="text/javascript" src="js/vendor/jquery-3.5.1.min.js"></script>
  
      <script type="text/javascript" src="js/main.js"></script>
  
    </body>
  </html>`;
  },
  bootstrapHTML: (title)=>{
    return `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="css/master.css">

    <title>${title}</title>
  </head>
  <body>
    <!-- Based on the bootstrap's Starter Tamplate available on: https://getbootstrap.com/docs/4.4/getting-started/introduction/ -->
    <h1>${title}</h1>
    <div id="main"></div>

    <script src="js/vendor/jquery-3.5.1.slim.min.js"></script>
    <script src="js/vendor/popper.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>

    <script src="js/main.js"></script>
  </body>
</html>`
  },
  gameHTML: (title)=>{
    return `<!DOCTYPE html>
<html lang="en">
  <head>
  	<title>${title}</title>
  	<meta charset="utf-8">
  	<link rel="stylesheet" type="text/css" href="css/vendor/nvk.reset.min.css">
  	<link rel="stylesheet" type="text/css" href="css/master.css">
  </head>
  <body>

  	<h1>${title}</h1>

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
</html>`
  },
  vueHTML: (title)=>{
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${title}</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="css/vendor/nvk.reset.min.css">
    <link rel="stylesheet" href="css/master.css">
  </head>
  <body>

    <h1>${title}</h1>

    <div id="app">
      {{ message }}
    </div>

    <script type="text/javascript" src="js/vendor/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="js/vendor/vue.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

  </body>
</html>`;
  },
  _404: (title)=>{
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${title} - Page Not Found</title>
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
    <h1>${title}</h1>
    <h2>Page Not Found</h2>
    <p>Sorry, but the page you were trying to view does not exist.</p>
  </body>

</html>
<!-- IE needs 512+ bytes: https://blogs.msdn.microsoft.com/ieinternals/2010/08/18/friendly-http-error-pages/ -->
`;
  },
  completeGDD() {
    return `<h1>GAME DESIGN DOCUMENT</h1>
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
`
  }
}
