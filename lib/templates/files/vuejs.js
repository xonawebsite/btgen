module.exports = function vueJS(){
  return `var app = new Vue({
    el: '#app',
    data: function(){
      return {
        message: 'Hello World!'
      }
    }
  })`;
}
