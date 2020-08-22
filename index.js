#!/usr/bin/env node

const help = require('./lib/help.js');
const templates = require('./lib/templates.js');
const process = require('process');
const fs = require('fs');
const https = require('https')

if (process.argv[2]){
	switch (process.argv[2]){
		case "webpage": {
			if (process.argv[3]){
				// generate the webpage
				let webpage = require('./lib/webpage.js');
				let tree = webpage.tree;

				let projectName = process.argv[3];
				
				fs.mkdirSync(`./${projectName}`);
				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(projectName+tree[i]);
				}
				console.log(`Folder tree successfully created!`);

				webpage.createFiles();

				console.log(`Files successfully created!`);
				console.log(`Project ${projectName} ready to work on!`);
				break;
			}
		}
		case "bootstrap": {
			if (process.argv[3]){
				// generate the webpage
				let tree = tp.btwebpageTree;
				let project = process.argv[3];
				fs.mkdirSync(`./${project}`);
				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(tree[i]);
				}
				console.log(`Project tree successfully created!`);
				fs.writeFile(`./${project}/index.html`, tp.bootstrapHtml, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`./${project}/404.html`, tp._404Page, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`./${project}/robots.txt`, tp.robotsTXT, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`./${project}/humans.txt`, tp.humansTXT, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`${project}/css/master.css`, tp.simpleCSS, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`${project}/js/main.js`, tp.simpleJS, (err)=>{
					if (err) throw err;
				});
				tp.BootstrapJS(`${project}/js/vendor`);
				tp.Bootstrap(`${project}/css/vendor`);
				console.log(`Files successfully created!`);
				console.log(`Project ${project} ready to work on!`);
				break;
			}
		}
		case "webgame": {
			if (process.argv[3]){
				// generate the webpage
				let tree = tp.webgameTree;
				let project = process.argv[3];
				fs.mkdirSync(`./${project}`);
				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(tree[i]);
				}
				console.log(`Project tree successfully created!`);
				fs.writeFile(`./${project}/index.html`, tp.gameBaseHTML, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`./${project}/GDD.md`, tp.simpleGDD, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`./${project}/robots.txt`, tp.robotsTXT, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`./${project}/humans.txt`, tp.humansTXT, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`${project}/css/master.css`, tp.gameBaseCSS, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`${project}/js/game.js`, tp.gameBaseJS, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`${project}/js/devTools.js`, tp.gameDevToolsJS, (err)=>{
					if (err) throw err;
				});
				tp.gameBaseMusic(`${project}/assets/audio`);
				console.log(`Files successfully created!`);
				console.log(`Project ${project} ready to work on!`);
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
