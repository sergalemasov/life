var Wall = require('./scripts/wall');
var BouncingCritter = require('./scripts/bouncing-critter');
var World = require('./scripts/world');
var Legend = require('./scripts/legend');

var legend = {
  "#": Wall,
  "o": BouncingCritter
};

var plan = [
  "############################",
  "#      #    #      o      ##",
  "#                          #",
  "#          #####           #",
  "##         #   #    ##     #",
  "###           ##     #     #",
  "#           ###      #     #",
  "#   ####                   #",
  "#   ##       o             #",
  "# o  #         o       ### #",
  "#    #                     #",
  "############################"
];

function main() {
  var container = document.getElementById('world');

  var world = new World(plan, new Legend(legend));
  draw(world.toString(), container);

  setInterval(function () {
    world.turn();
    draw(world.toString(), container);
  }, 300);
}

function draw(toDisplay, container) {
  container.innerHTML = toDisplay;
}

window.addEventListener('load', main);