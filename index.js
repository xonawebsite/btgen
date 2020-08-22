#!/usr/bin/env node

const help = require('./lib/help.js');
const process = require('process');
const fs = require('fs');
const https = require('https')

if (process.argv[2]){
	switch (process.argv[2]){
		case "webpage": {
			if (process.argv[3]){
				// generate the webpage
				let webpage = require('./lib/templates/webpage.js');
				let tree = webpage.tree;

				let projectName = process.argv[3];

				fs.mkdirSync(`./${projectName}`);

				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName + tree[i]);
				}

				console.log(`Folder tree successfully created!`);

				webpage.createFiles(projectName);

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} is ready, happy coding!`);

				break;
			}
		}
		case "bootstrap": {
			if (process.argv[3]){
				// generate the webpage
				let bootstrap = require('./lib/templates/bootstrap.js');
				let tree = bootstrap.tree;

				let projectName = process.argv[3];

				fs.mkdirSync(`./${projectName}`);

				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName + tree[i]);
				}

				console.log(`Project tree successfully created!`);

				bootstrap.createFiles(projectName);

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} is ready, happy coding!`);

				break;
			}
		}
		case "webgame": {
			if (process.argv[3]){
				// generate the webpage
				let webgame = require('./lib/templates/webgame.js');
				let tree = webgame.tree;

				let projectName = process.argv[3];

				fs.mkdirSync(`./${projectName}`);

				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName + tree[i]);
				}

				console.log(`Project tree successfully created!`);

				webgame.createFiles(projectName);

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} is ready, happy coding!`);

				break;
			}
		}
		case "vuepage":{
			if (process.argv[3]){
				// generate the webpage
				let vuepage = require('./lib/templates/vuepage.js');
				let tree = vuepage.tree;

				let projectName = process.argv[3];

				fs.mkdirSync(`./${projectName}`);

				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName + tree[i]);
				}

				console.log(`Project tree successfully created!`);

				vuepage.createFiles(projectName);

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} is ready, happy coding!`);

				break;
			}
		}
		case '-help':{
			help.printHelp();
			break;
		}
		case '--help':{
			help.printHelp();
			break;
		}
		case 'help':{
			help.printHelp();
			break;
		}
		case '-h':{
			help.printHelp();
			break;
		}
		case 'h':{
			help.printHelp();
			break;
		}
		default:{
			console.log("*** Argument missed ***");
			help.printHelp();
			console.log("Exiting...");
		}
	}
}else{
	console.log("*** No command found ***");
	help.printHelp();
	console.log("Exiting...");
}
