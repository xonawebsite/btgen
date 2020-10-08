#!/usr/bin/env node

const help = require('./lib/help.js')
const process = require('process')
const fs = require('fs')

const options = process.argv.filter(function(comm, index){
	return index > 2;
});

var ready = false;
var projectName = '';

function createRootFolder(projectName, tree){
	try {
		fs.mkdirSync(`./${projectName}`);
		console.log("Created " + projectName);
	} catch (err) {
		console.log('Error trying to create the ' + projectName + ' folder');
		console.log("Ensure there's no folder named " + projectName);
		return false;
	}
	for (i = 0; i < tree.length; i++) {
		fs.mkdirSync(projectName + tree[i]);
		console.log("Created " + projectName + tree[i]);
	}
	return true;
}

if (process.argv[2]){
	switch (process.argv[2]){
		case "web":
		case "webpage": {
			if (process.argv[3]){
				let webpage = require('./lib/templates/webpage.js');
				if (options.includes('--help')){
					if (options.includes('-v')){
						webpage.help(true);
					}else{
						webpage.help();
					}
					break;
				}
				let tree = options.includes('no-ed') ? 
					webpage.filledTree : 
					webpage.tree;

				projectName = process.argv[3];
				
				if (createRootFolder(projectName, tree)){
					console.log(`Folder tree successfully created!`);
				}else{
					break;
				}

				webpage.createFiles(projectName, options);
				ready = true;
				break;
			}
		}
		case "bt":
		case "bootstrap": {
			if (process.argv[3]){
				let bootstrap = require('./lib/templates/bootstrap.js');
				if (options.includes('--help')){
					if (options.includes('-v')){
						bootstrap.help(true);
					}else{
						bootstrap.help();
					}
					break;
				}
				let tree = options.includes('no-ed') ? 
					bootstrap.filledTree : 
					bootstrap.tree;

				projectName = process.argv[3];
				
				if (createRootFolder(projectName, tree)){
					console.log(`Project tree successfully created!`);
				}else{
					break;
				}

				bootstrap.createFiles(projectName, options);
				ready = true;
				break;
			}
		}
		case "game":
		case "webgame": {
			if (process.argv[3]){
				let webgame = require('./lib/templates/webgame.js');
				if (options.includes('--help')){
					if (options.includes('-v')){
						webgame.help(true);
					}else{
						webgame.help();
					}
					break;
				}
				let tree = options.includes('no-ed') ? 
					webgame.filledTree : 
					webgame.tree;

				projectName = process.argv[3];
				
				if (createRootFolder(projectName, tree)){
					console.log(`Project tree successfully created!`);
				}else{
					break;
				}

				webgame.createFiles(projectName, options);
				ready = true;
				break;
			}
		}
		case "vue":
		case "vuepage": {
			if (process.argv[3]){
				let vuepage = require('./lib/templates/vuepage.js');
				if (options.includes('--help')){
					if (options.includes('-v')){
						vuepage.help(true);
					}else{
						vuepage.help();
					}
					break;
				}
				let tree = options.includes('no-ed') ? 
					vuepage.filledTree : 
					vuepage.tree;

				projectName = process.argv[3];
				
				if (createRootFolder(projectName, tree)){
					console.log(`Project tree successfully created!`);
				}else{
					break;
				}

				vuepage.createFiles(projectName, options);
				ready = true;
				break;
			}
		}
		case "react":
		case "reactpage": {
			if (process.argv[3]){
				let reactpage = require('./lib/templates/reactpage.js');
				if (options.includes('--help')){
					if (options.includes('-v')){
						reactpage.help(true);
					}else{
						reactpage.help();
					}
					break;
				}
				let tree = options.includes('no-ed') ? 
					reactpage.filledTree : 
					reactpage.tree;

				projectName = process.argv[3];
				
				if (createRootFolder(projectName, tree)){
					console.log(`Project tree successfully created!`);
				}else{
					break;
				}

				reactpage.createFiles(projectName, options);
				ready = true;
				break;
			}
		}
		case "express":
		case "expressapp": {
			if (process.argv[3]){
				let expressApp = require('./lib/templates/expressapp.js');
				if (options.includes('--help')){
					if (options.includes('-v')){
						expressApp.help(true);
					}else{
						expressApp.help();
					}
					break;
				}
				let tree = options.includes('no-ed') ? 
					expressApp.filledTree : 
					expressApp.tree;

				projectName = process.argv[3];
				
				if (createRootFolder(projectName, tree)){
					console.log(`Project tree successfully created!`);
				}else{
					break;
				}

				expressApp.createFiles(projectName, options);
				ready = true;
				break;
			}
		}
		case '-help':
		case '--help':
		case 'help':
		case 'h':
		case '-h': {
			help.printHelp();
			break;
		}
		case 'v':
		case '-v':
		case '-version':
		case '--version': {
			console.log("BTGen v0.1.4                by @kenliten");
			break;
		}
		case 'c':
		case '-c':
		case '-changes':
		case '--changes': {
			if (options.includes('v')){
				help.printChanges(true);
			}else{
				help.printChanges();
			}
			break;
		}
		default: {
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

if (ready) {
	console.log(`Project ${projectName} is ready!`);
	console.log(`Just wait to files to be downloaded.`);
}