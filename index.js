var $ = require('jquery');
var main = require('./src/main');

$(() => {
  main();
});

// This lets us do awesome hot loading stuff
if (module.hot) {
  module.hot.accept();
}
