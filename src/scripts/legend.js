Legend = function (legend) {
  this.charMap = {};

  Object.keys(legend).forEach(function(key) {
    this.charMap[key] = legend[key];
  }.bind(this));
}

Legend.emptyCh = ' ';

Legend.prototype.elementFromChar = function (ch) {
  if (ch === Legend.emptyCh || !this.charMap[ch]) {
    return null;
  }

  return new this.charMap[ch]();
};

Legend.prototype.charFromElement = function (element) {
  if (element == null || !element.constructor) {
    return Legend.emptyCh;
  }

  var ch;
  Object.keys(this.charMap).some(function(originCh) {
    if (element.constructor === this.charMap[originCh]) {
      ch = originCh;
      return true;
    }
  }.bind(this));

  return ch || Legend.emptyCh;
}

module.exports = Legend;