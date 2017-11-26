var Grid = require('./grid');
var Vector = require('./vector');
var View = require('./view');
var directions = require('./directions');

function World(map, legend) {
  this.grid = new Grid(map[0].length, map.length);
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++) {
      this.grid.set(
        new Vector(x, y),
        this.legend.elementFromChar(line[x])
      );
    }
  }.bind(this));
}

World.prototype.toString = function() {
  var output = '';
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += this.legend.charFromElement(element);
    }
    output += '\n';
  }
  return output;
};

World.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));

  if (action && action.type == 'move') {
    var dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) === null) {
      this.grid.set(vector, null);
      this.grid.set(dest, critter);
    }
  }
};

World.prototype.checkDestination = function(action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(directions[action.direction]);
    if (this.grid.isInside(dest)) {
      return dest;
    }
  }
};

World.prototype.turn = function() {
  var acted = [];
  this.grid.forEach(function(critter, vector) {
    if (critter.act && acted.indexOf(critter) === -1) {
      acted.push(critter);
      this.letAct(critter, vector);
    }
  }, this);
};

module.exports = World;