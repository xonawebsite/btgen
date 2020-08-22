module.exports = function bootstrapHTML(title){
  return `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="css/master.css">

    <title>${title}</title>
  </head>
  <body>
    <!-- Based on the bootstrap's Starter Tamplate available on: https://getbootstrap.com/docs/4.4/getting-started/introduction/ -->
    <h1>${title}</h1>
    <div id="main"></div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/vendor/jquery-3.5.1.slim.min.js"></script>
    <script src="js/vendor/popper.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>

    <script src="js/main.js"></script>
  </body>
</html>`
}
