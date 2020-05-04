const https = require('https'); const fs = require('fs');

let templates ={
	webpageTree: [`./${process.argv[3]}/css`, `./${process.argv[3]}/images`, `./${process.argv[3]}/js`, `./${process.argv[3]}/js/vendor`],
	btwebpageTree: [`./${process.argv[3]}/css`, `./${process.argv[3]}/css/vendor`, `./${process.argv[3]}/images`, `./${process.argv[3]}/js`, `./${process.argv[3]}/js/vendor`],
	webgameTree: [`./${process.argv[3]}/css`, `./${process.argv[3]}/assets`, `./${process.argv[3]}/assets/audio`, `./${process.argv[3]}/assets/sprites`, `./${process.argv[3]}/js`, `./${process.argv[3]}/js/vendor`],
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
	_404Page: `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Page Not Found</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * {
      line-height: 1.2;
      margin: 0;
    }

    html {
      color: #888;
      display: table;
      font-family: sans-serif;
      height: 100%;
      text-align: center;
      width: 100%;
    }

    body {
      display: table-cell;
      vertical-align: middle;
      margin: 2em auto;
    }

    h1 {
      color: #555;
      font-size: 2em;
      font-weight: 400;
    }

    p {
      margin: 0 auto;
      width: 280px;
    }

    @media only screen and (max-width: 280px) {

      body,
      p {
        width: 95%;
      }

      h1 {
        font-size: 1.5em;
        margin: 0 0 0.3em;
      }

    }
  </style>
</head>

<body>

  <!-- 404 page from html5boilerplate downloadable from https://html5boilerplate.com/ -->
  <h1>Page Not Found</h1>
  <p>Sorry, but the page you were trying to view does not exist.</p>
</body>

</html>
<!-- IE needs 512+ bytes: https://blogs.msdn.microsoft.com/ieinternals/2010/08/18/friendly-http-error-pages/ -->
`,
	bootstrapHtml: `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="css/master.css">

    <title>WEB_TITLE</title>
  </head>
  <body>
    <!-- Based on the bootstrap's Starter Tamplate available on: https://getbootstrap.com/docs/4.4/getting-started/introduction/ -->
    <h1>WEB_TITLE</h1>

	<div id="main"></div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/vendor/jquery-3.4.1.slim.min.js"></script>
    <script src="js/vendor/popper.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
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

/* User styles */
/* General styles */

/* small screens */

@media (min-width: 576px) {
	/* styles here */
}

/* medium screens */

@media (min-width: 768px) {
	/* styles here */
}

/* large screens */

@media (min-width: 992px) {
	/* styles here */
}

/* extralarge screens */

@media (min-width: 1200px) {
	/* styles here */
}

/* printing styles */

@media print {
	/* styles here */
}

`,
	simpleCSS:`/* User styles */
/* General styles */

/* small screens */

@media (min-width: 576px) {
	/* styles here */
}

/* medium screens */

@media (min-width: 768px) {
	/* styles here */
}

/* large screens */

@media (min-width: 992px) {
	/* styles here */
}

/* extralarge screens */

@media (min-width: 1200px) {
	/* styles here */
}

/* printing styles */

@media print {
	/* styles here */
}

	`,
	robotsTXT: `# www.robotstxt.org/

# Allow crawling of all content
User-agent: *
Disallow:
	`,
	humansTXT: `# humanstxt.org/
# The humans responsible & technology colophon

# TEAM => repear for each one in the team

<Your title>: <Your name>.
Site: <email, link to a contact form, etc.>
Twitter: <your Twitter username.>

# THANKS

Name: <name or url>

# TECHNOLOGY COLOPHON

    HTML5, CSS3
    jQuery, Popper.js, Bootstrap

# SITE

Last update: YYYY/MM/DD
Standards: /* Standarts you adopt in the project. Eg: HTML5, CSS3, ECMAScript6 */
Components: /* Frameworks and stuff used to build the site. Eg: jquery, bootstrap */
Software: /* Software used to create the site. Eg: sublime text, google chrome, btgen */`,
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
	BootstrapJS: (p)=>{
		https.get('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/bootstrap.min.js`, body);
		    });
		});
		https.get('https://code.jquery.com/jquery-3.4.1.slim.min.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/jquery-3.4.1.slim.min.js`, body);
		    });
		});
		https.get('https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js').on('response', function (response) {
		    let body = '';
		    response.on('data', function (chunk) {
		        body += chunk;
		    });
		    response.on('end', function () {
		    	fs.writeFileSync(`${p}/popper.min.js`, body);
		    });
		});
	},
	Bootstrap: (p)=>{
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