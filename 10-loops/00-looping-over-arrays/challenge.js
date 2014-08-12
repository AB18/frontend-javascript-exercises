module.exports.sumNumbers = function(arrayPassed){
  var sum = 0
  if(arrayPassed.length == 0) {
    //do nothing
  }
  else
  {
    for(var i=0; i< arrayPassed.length ; i++)
    {
      sum += arrayPassed[i];
    }
  }
  return sum;

};

module.exports.splitAndLowerCaseString = function(inputString){
  inputString = inputString.toLowerCase();
  var split = inputString.split(',');
  return split;
};

module.exports.addIndex = function(inputValue){
  var returnArray = [];
  for(var property in inputValue ){
      returnArray.push(property + " is " + inputValue[property]);
  };
  return returnArray;
};
