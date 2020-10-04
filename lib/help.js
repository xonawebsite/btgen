// cli help file

module.exports = {
	printHelp: ()=>{
		console.log(`
Welcome to BtGen - The web development boilerplate CLI generator tool.
Usage:
btgen template project-name

Commands Detailed:

webpage			Generate a simple HTML/CSS/JS web page boilerplate.
bootstrap		Generate a simple HTML5+bootstrap web page boilerplate.
webgame			Generate a simple HTML5/JS game using canvas 2d rendering
					this include a simple game loop and basic info
vuepage			Create a simple vue powered webpage
reactpage		Create a simple react powered webpage
expressapp		Create a simple express application
help 			Display this help.
`);
	}

};