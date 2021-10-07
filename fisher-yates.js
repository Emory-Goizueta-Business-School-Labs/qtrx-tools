Array.prototype.shuffle = function() {
// Fisher/Yates shuffle alg for picking random
  var i, j, tmp;
  i = this.length;
  while (--i > 0){
    j = Math.floor(Math.random() * (i + 1));
    tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
  return this;
};
