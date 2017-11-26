var getRandomArrayElement = require('./utils').getRandomArrayElement;
var directions = require('./directions');

function BouncingCritter() {
  this.direction = getRandomArrayElement(Object.keys(directions));
};

BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != ' ') {
    this.direction = view.find(' ') || 's';
  }

  return {
    type: 'move',
    direction: this.direction
  };
};

module.exports = BouncingCritter;