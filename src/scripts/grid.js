var Vector = require('./vector');

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}

Grid.prototype.isInside = function(vector) {
  return (
    vector.x >= 0 &&
    vector.x < this.width &&
    vector.y >= 0 &&
    vector.y < this.height
  );
};

Grid.prototype.get = function(vector) {
  var ix = this.getElementIx_(vector);
  return this.space[ix];
};

Grid.prototype.set = function(vector, value) {
  var ix = this.getElementIx_(vector);
  this.space[ix] = value;
};

Grid.prototype.forEach = function(f, context) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var value = this.space[x + y * this.width];
      if (value != null) {
        f.call(context, value, new Vector(x, y));
      }
    }
  }
};

Grid.prototype.getElementIx_ = function(vector) {
  return vector.x + this.width * vector.y;
}

module.exports = Grid;