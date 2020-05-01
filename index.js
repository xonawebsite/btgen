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
				fs.mkdirSync(`./${process.argv[3]}`);
				for (i = 0; i < tree.length; i++){
					fs.mkdirSync(tree[i]);
				}
				console.log(`Folder tree successfully created!`);
				fs.writeFile(`./${process.argv[3]}/index.html`, tp.simpleHtml, (err)=>{
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
				break;
			}
		}default:{
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