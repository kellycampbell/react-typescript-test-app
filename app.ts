import greeter = require('./greeter');  
import $ = require('jquery');

$(() => {
  $(document.body).html(greeter("Kelly"));
  console.log('typescript is cool!')
});

