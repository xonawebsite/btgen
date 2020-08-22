module.exports = function vueHTML(title){

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${title}</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="css/master.css">
  </head>
  <body>

    <h1>${title}</h1>

    <div id="app">
      {{ message }}
    </div>

    <script type="text/javascript" src="js/vendor/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="js/vendor/vue.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

  </body>
</html>`;

}