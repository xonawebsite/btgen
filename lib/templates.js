const https = require('https');
const fs = require('fs');

let templates ={
	webpageTree: [`./${process.argv[3]}/css`,
	`./${process.argv[3]}/images`,
	`./${process.argv[3]}/js`,
	`./${process.argv[3]}/js/vendor`],
	simpleHtml: `<!DOCTYPE html>
<html lang=en>
<head>
	<title>WEB_TITLE</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="css/master.css">
</head>
<body>
	<h1>WEB_TITLE</h1>

	<div id="main"></div>

	<script type="text/javascript" src="js/vendor/jquery-3.5.0.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>`,
	bootstrapHtml: `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/master.css">

    <title>WEB_TITLE</title>
  </head>
  <body>
    <!-- Starter Tamplate from bootstrap available on: https://getbootstrap.com/docs/4.4/getting-started/introduction/ -->
    <h1>WEB_TITLE</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
  </body>
</html>`,
	resetCSS: `/* 
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com 
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
 margin:0;
 padding:0;
 border:0;
 outline:0;
 font-size:100%;
 vertical-align:baseline;
 background:transparent;
}

body {
 line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
 display:block;
}

nav ul {
 list-style:none;
}

blockquote, q {
 quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
 content:'';
 content:none;
}

a {
 margin:0;
 padding:0;
 font-size:100%;
 vertical-align:baseline;
 background:transparent;
}

/* change colours to suit your needs */
ins {
 background-color:#ff9;
 color:#000;
 text-decoration:none;
}

/* change colours to suit your needs */
mark {
 background-color:#ff9;
 color:#000; 
 font-style:italic;
 font-weight:bold;
}

del {
 text-decoration: line-through;
}

abbr[title], dfn[title] {
 border-bottom:1px dotted;
 cursor:help;
}

table {
 border-collapse:collapse;
 border-spacing:0;
}

/* change border colour to suit your needs */
hr {
 display:block;
 height:1px;
 border:0; 
 border-top:1px solid #cccccc;
 margin:1em 0;
 padding:0;
}

input, select {
 vertical-align:middle;
}
`,
	simpleJS: '$("#main").text("Hello World!");',
	JQuery: (p)=>{
		https.get('https://code.jquery.com/jquery-3.5.0.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/jquery-3.5.0.js`, body);
		    });
		});
	},
	JQueryMin: (p)=>{
		https.get('https://code.jquery.com/jquery-3.5.0.min.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/jquery-3.5.0.min.js`, body);
		    });
		});
	},
	Bootstrap: (p)=>{
		https.get('https://code.jquery.com/jquery-3.5.0.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/jquery-3.5.0.js`, body);
		    });
		});
	},
	BootstrapMin: (p)=>{
		https.get('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/bootstrap.min.css`, body);
		    });
		});
	}
}

module.exports = templates;