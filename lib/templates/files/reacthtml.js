module.exports = function vueHTML(title){

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${title}</title>
  
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <link rel="stylesheet" href="css/master.css">
    </head>
    <body>
  
      <h1>${title}</h1>
      
      <div id="like_button_container"></div>
  
      <!-- Load React. -->
      <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
      <script src="./js/vendor/react.development.js"></script>
      <script src="./js/vendor/react-dom.development.js"></script>
      
      <script type="text/javascript" src="js/vendor/jquery-3.5.1.min.js"></script>
  
      <script type="text/javascript" src="js/main.js"></script>
  
    </body>
  </html>`;

}
