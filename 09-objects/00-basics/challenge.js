module.exports.createCourse = function(courseTitle, courseDuration,courseStudents){
    
    var course =  {
        title: courseTitle,
        duration: courseDuration,
        students: courseStudents
    };
    return course;
};

module.exports.addProperty = function(object, newProp, newValue){
  if(!(newProp in object))
  {
    object[newProp] = newValue;
  }
  return object;

};

module.exports.formLetter = function(letter){
  var content = "Hello " + letter.recipient + ",\n\n" + letter.msg 
   + "\n\nSincerely,\n" + letter.sender;
   return content; 

};

module.exports.canIGet = function(item, money){
  var priceChart = [
  {itemName: 'MacBook Air', itemValue : 999},
  {itemName: 'MacBook Pro', itemValue : 1299},
  {itemName: 'Mac Pro', itemValue : 2499},
  {itemName: 'Apple Sticker', itemValue : 1},
  ];

  var returnValue = false;
  for(var i=0;i < priceChart.length ; i++)
  {
    if((priceChart[i].itemName == item) && (money >= priceChart[i].itemValue ) )
    {
      returnValue = true;
    }
  }
  return returnValue;
};