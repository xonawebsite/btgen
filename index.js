#!/usr/bin/env node

const help = require('./lib/help.js')
const process = require('process')
const fs = require('fs')

const options = process.argv.filter(function(comm, index){
	return index > 2;
});

if (process.argv[2]){
	switch (process.argv[2]){
		case "web":
		case "webpage": {
			if (process.argv[3]){
				// generate the webpage
				let webpage = require('./lib/templates/webpage.js');
				let tree = options.includes('no-ed') ? 
					webpage.filledTree : 
					webpage.tree;

				let projectName = process.argv[3];

				fs.mkdirSync(`./${projectName}`);

				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName + tree[i]);
				}

				console.log(`Folder tree successfully created!`);

				webpage.createFiles(projectName, options);

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} is ready, happy coding!`);

				break;
			}
		}
		case "bt":
		case "bootstrap": {
			if (process.argv[3]){
				// generate the webpage
				let bootstrap = require('./lib/templates/bootstrap.js');
				let tree = options.includes('no-ed') ? 
					bootstrap.filledTree : 
					bootstrap.tree;

				let projectName = process.argv[3];

				fs.mkdirSync(`./${projectName}`);

				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName + tree[i]);
				}

				console.log(`Project tree successfully created!`);

				bootstrap.createFiles(projectName, options);

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} is ready, happy coding!`);

				break;
			}
		}
		case "game":
		case "webgame": {
			if (process.argv[3]){
				// generate the webpage
				let webgame = require('./lib/templates/webgame.js');
				let tree = options.includes('no-ed') ? 
					webgame.filledTree : 
					webgame.tree;

				let projectName = process.argv[3];

				fs.mkdirSync(`./${projectName}`);

				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName + tree[i]);
				}

				console.log(`Project tree successfully created!`);

				webgame.createFiles(projectName, options);

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} is ready, happy coding!`);

				break;
			}
		}
		case "vue":
		case "vuepage":{
			if (process.argv[3]){
				// generate the webpage
				let vuepage = require('./lib/templates/vuepage.js');
				let tree = options.includes('no-ed') ? 
					vuepage.filledTree : 
					vuepage.tree;

				let projectName = process.argv[3];

				fs.mkdirSync(`./${projectName}`);

				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName + tree[i]);
				}

				console.log(`Project tree successfully created!`);

				vuepage.createFiles(projectName, options);

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} is ready, happy coding!`);

				break;
			}
		}
		case "react":
		case "reactpage": {
			if (process.argv[3]){
				// generate the webpage
				let reactpage = require('./lib/templates/reactpage.js');
				let tree = options.includes('no-ed') ? 
					reactpage.filledTree : 
					reactpage.tree;

				let projectName = process.argv[3];

				fs.mkdirSync(`./${projectName}`);

				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName + tree[i]);
				}

				console.log(`Project tree successfully created!`);

				reactpage.createFiles(projectName, options);

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} is ready, happy coding!`);

				break;
			}
		}
		case "express":
		case "expressapp": {
			if (process.argv[3]){
				// generate the webpage
				let expressApp = require('./lib/templates/expressapp.js');
				let tree = options.includes('no-ed') ? 
					expressApp.filledTree : 
					expressApp.tree;

				let projectName = process.argv[3];

				fs.mkdirSync(`./${projectName}`);

				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName + tree[i]);
				}

				console.log(`Project tree successfully created!`);

				expressApp.createFiles(projectName, options);

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} is ready, happy coding!`);

				break;
			}
		}
		case '-help':
		case '--help':
		case 'help':
		case 'h':
		case '-h':{
			help.printHelp();
			break;
		}
		case 'v':
		case '-v':
		case '-version':
		case '--version':{
			console.log("BTGen v0.1.4                by @kenliten");
			break;
		}
		case 'c':
		case '-c':
		case '-changes':
		case '--changes':{
			if (options.includes('v')){
				help.printChanges(true);
			}else{
				help.printChanges();
			}
			break;
		}
		default:{
			console.log("*** Missed Arguments ***");
			console.log("Execute btgen -h for usage info");
			console.log("Exiting...");
		}
	}
}else{
	console.log("*** No command found ***");
	console.log("Execute btgen -h for usage info");
	console.log("Exiting...");
}
