// cli help file

module.exports = {
	printHelp: ()=>{
		console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
Usage:

btgen command [project-name] [options]

Commands Detailed:
Command is a valid template name or an additional command from the list bellow

Templates:
-------------------------------------------------------------------------------
webpage			Generate a simple HTML5/CSS/JS web page boilerplate.
bootstrap		Generate a simple HTML5+bootstrap web page boilerplate.
webgame			Generate a simple HTML5/JS game using canvas 2d rendering, this
					include a simple game loop and basic info
vuepage			Create a simple Vue.js (v2) webpage
reactpage		Create a simple React.js webpage
expressapp		Create a simple Express application
angularpage		Create a simple AngularJS webpage
electronapp		Create a simple Electron application boilerplate

Additional Commands:
-------------------------------------------------------------------------------
help | h 		Display this help.
version | v		Display software version.
changes	| c [v]	Display changes implemented in the current version [verbose]

Options:
-------------------------------------------------------------------------------
--bt			Include bootstrap
--jq			Include jquery

--no-bt			Don't include bootstrap
--no-css		Don't generate css files
--no-ed			Don't create empty directories
--no-jq			Don't include jquery
--no-js			Don't generate js files
--no-server		Don't include server files (like robots.txt or humans.txt)

`);
	},
	printChanges: (v = false)=>{
		// verbose info
		if (v) {
			console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
Changes about the previous version
-------------------------------------------------------------------------------

1. Implemented both new options version (-v) and changes (-c)
	Version display the current installed version of BTGen. This option is 
	available by 4 different ways:
	v, -v, -version and --version
2. Added two more boilerplates: angularpage & electronapp
	angularpage is just like reactpage or vuepage, a single page (index) using
	AngularJS(1.8x) with a main app and a main controller (MainController)
3. Improved help output
	Changes about indentation, command details, and sections visual help (now)
	is much easier know if it's a new topic or still being the same
4. Implemented 8 different options:
	bt, jq, no-bt, no-css, no-js, no-ed, no-jq and no-server
		bt and jq are options to include bootstrap and jquery, respectively
		in boilerplate that don 't have that feature by default
5. fixes:
	5.1.Boilerplates generated with undefined parameters.
		Some boilerplates in the previous version, were generated with missing
		parameters, so the file had some titles and objects named undefined
	5.2.Happy Coding message before finishing the boilerplate setup
		Before got done, the tool was writing the final message (Happy coding!)
		but, stick finishing the job. Now, that message is shown once the
		complete job is done.
		`);
		}else{
			console.log(`
Welcome to BTGen - The web development boilerplate CLI generator tool.
Changes about the previous version
-------------------------------------------------------------------------------

1. Implemented both new options version (-v) and changes (-c)
2. Added two more boilerplates: angularpage & electronapp
3. Improved help output
4. Implemented some options ot generate boilerplates:
	bt, jq, no-bt, no-css, no-js, no-ed, no-jq and no-server
5. fixes:
	5.1. Boilerplates generated with undefined parameters.
		`);
		}
	}

};