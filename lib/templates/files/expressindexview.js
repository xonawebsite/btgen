module.exports = function expressIndexView(){
    return `<!DOCTYPE html>
    <html>
      <head>
        <title><%= title %></title>
        <link rel='stylesheet' href='/css/master.css' />
      </head>
      <body>
        <h1><%= title %></h1>
        <p>Welcome to <%= title %></p>
        <script src="/js/main.js">
      </body>
    </html>`;
}