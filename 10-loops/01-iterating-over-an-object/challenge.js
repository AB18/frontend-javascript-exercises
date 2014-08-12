module.exports.getKeys = function(keyValue) {
  var returnArray = [];
  for (var property in keyValue) {
    
      returnArray.push(property);
  }
   return returnArray;
};

module.exports.getValues = function(keyValue) {
    var returnArray = [];
    for(var property in keyValue )
    {
      returnArray.push(keyValue[property]);
    }
    return returnArray;

};

module.exports.objectToArray = function(inputValue) {
  var returnArray = [];
  for(var property in inputValue ){
      returnArray.push(property + " is " + inputValue[property]);
  }
  return returnArray;
};