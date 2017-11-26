function Plant(feelings) {
  this.feelings = feelings;
  this.energy = 3 + Math.random() * 4;
}

Plant.reproductiveEnergy = 15;

Plant.prototype.act = function(context) {
  if (this.energy > Plant.reproductiveEnergy) {
    var space = this.feelings.find(' ');

    if (space) {
      return {
        type: 'reproduce',
        direction: space
      };
    }
  }

  if (this.energy < 20) {
    return {
      type: 'grow'
    };
  }
};