module.exports = function simpleJS(){
  return `;(function(){
  window.onload = function(){
    $("#main").text("Hello World!");
  }
})();`;
}
