module.exports.newArray = function(arg1,arg2,arg3,arg4 ){
  var arr = [arg1,arg2,arg3,arg4];
  return arr;

};

module.exports.firstAndLast = function(array){

  var lastElementIndex  = array.length - 1;
  var returnArray = [array[0],array[lastElementIndex]];
  return returnArray;
};