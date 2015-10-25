var $ = require('jquery');
var greeter = require('./src/greeter');

$(() => {
  greeter();
});

// This lets us do awesome hot loading stuff
if (module.hot) {
  module.hot.accept();
}
