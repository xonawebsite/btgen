// cli help file

module.exports = {
	printHelp: ()=>{
		console.log(`
Welcome to BtGen - The web development boilerplate CLI generator tool.
Usage:
btgen <command> <name> [<options>]

Commands Detailed:

webpage			Generate a simple HTML/CSS/JS web page boilerplate.
bootstrap		Generate a simple HTML5+bootstrap web page boilerplate.
webgame			Generate a simple HTML5/JS game using canvas 2d rendering
					this include a simple game loop and basic info
help 			Display this help.\n`);
	}

};