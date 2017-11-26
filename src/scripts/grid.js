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

Grid.prototype.getElementIx_ = function(vector) {
  return vector.x + this.width * vector.y;
}

module.exports = Grid;