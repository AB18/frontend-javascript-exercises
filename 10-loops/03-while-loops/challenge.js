module.exports.stream = function(condition, action){
  while(condition() != false) {
    action();
  }

};

module.exports.sumNumbers = function(array){
  var i = 0
  var sum = 0;
  while( i < array.length)
  {
    sum += array[i];
    i++;
  }
  return sum;

};

