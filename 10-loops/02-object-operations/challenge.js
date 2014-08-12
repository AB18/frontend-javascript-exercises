module.exports.copy = function(keyValue){
  var copyObject = {};
  for(var property in keyValue)
  {
    copyObject[property] = keyValue[property];
  }
  console.log(copyObject);
  return copyObject;

};

module.exports.extend = function(dest, src){
  for(var property in src)
  {
    dest[property] = src[property];
  }
  console.log(dest);
  return dest;

};

module.exports.hasElems = function(obj, array) {
  for(var i = 0; i < array.length; i++) 
  {
    if(!(array[i] in obj))
    {
      console.log(i);
      return false;
    }
  }
  return true;

};