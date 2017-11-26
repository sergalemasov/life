function Pig(eyes) {
  this.energy = 20;
  this.eyes = eyes;
  this.assumptedPlantDirection = null;
}

Pig.reproductiveEnergy = 60;

Pig.prototype.act = function() {
  var space = this.eyes.find(' ');

  if (this.energy > Pig.reproductiveEnergy && space) {
    return {
      type: 'reproduce',
      direction: space
    };
  }

  var plant = this.eyes.find('*');

  if (plant) {
    this.assumptedPlantDirection = plant;
    return {
      type: 'eat',
      direction: plant
    };
  }

  if (this.assumptedPlantDirection) {
    var action;

    var isMyPlaceFree = this.eyes.look(this.assumptedPlantDirection) === ' ';
    if (isMyPlaceFree) {
      action = {
        type: 'move',
        direction: this.assumptedPlantDirection
      };
    }
    this.assumptedPlantDirection = null;

    if (action) {
      return action;
    }
  }

  if (space) {
    return {
      type: 'move',
      direction: space
    };
  }
};