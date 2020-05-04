#!/usr/bin/env node

const help = require('./lib/help.js');
const templates = require('./lib/templates.js');
const tp = templates;
const process = require('process');
const fs = require('fs');
const https = require('https')

if (process.argv[2]){
	switch (process.argv[2]){
		case "webpage": {
			if (process.argv[3]){
				// generate the webpage
				let tree = tp.webpageTree;
				let project = process.argv[3];
				fs.mkdirSync(`./${project}`);
				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(tree[i]);
				}
				console.log(`Folder tree successfully created!`);
				fs.writeFile(`./${project}/index.html`, tp.simpleHtml, (err)=>{
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
				fs.writeFile(`${tree[0]}/master.css`, tp.resetCSS, (err)=>{
					if (err) throw err;
				});
				fs.writeFile(`${tree[2]}/main.js`, tp.simpleJS, (err)=>{
					if (err) throw err;
				});
				tp.JQuery(tree[3]);
				tp.JQueryMin(tree[3]);
				console.log(`Files successfully created!`);
				console.log(`Project ${project} ready to work on!`);
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