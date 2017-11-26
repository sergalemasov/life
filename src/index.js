var directions = require('./scripts/directions');

window.addEventListener('load', function () {
  var world = document.getElementById('world');
  var output = '<pre>' + JSON.stringify(directions, null, 2) + '</pre>';
  world.innerHTML = output;
});