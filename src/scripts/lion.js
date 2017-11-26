function Lion(eyes) {
  this.energy = 20;
  this.eyes = eyes;
}

Lion.reproductiveEnergy = 60;

Lion.prototype.act = function() {
  var space = this.eyes.find(' ');

  if (this.energy > Lion.reproductiveEnergy && space) {
    return {
      type: 'reproduce',
      direction: space
    };
  }

  var pig = this.eyes.find('o');

  if (pig) {
    return {
      type: 'eat',
      direction: pig
    };
  }

  if (space) {
    return {
      type: 'move',
      direction: space
    };
  }
};