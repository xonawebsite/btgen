module.exports = function gameHTML(title){
  return `<!DOCTYPE html>
<html lang="en">
  <head>
  	<title>${title}</title>
  	<meta charset="utf-8">
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
}
