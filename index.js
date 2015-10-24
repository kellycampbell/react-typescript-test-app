
var greeter = require('./greeter');  
var $ = require('jquery');

$(() => {
  // $(document.body).html(greeter("Kelly"));
  greeter("Kelly");
  // console.log('typescript yay!')
});

if (module.hot) {
  module.hot.accept();
  // module.hot.dispose(function() {
  //   clearInterval(timer);
  // });
}
