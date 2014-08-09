module.exports.equalStrings = function(stringOne, stringTwo) {
    if (stringOne == stringTwo) 
      return true;
    else
      return false;
};

module.exports.notEqual = function(one, two) {
    if(one !== two)
      return true;
    else 
      return false;
};

module.exports.inBetween = function(lower, middle, upper) {
    if(lower < middle && middle < upper)
      return true;
    else
      return false;
};

module.exports.outsideRanges = function(number) {
  if ((10 < number && number < 20) || (42 <= number && number < 75) || (1 <= number && number <= 6) )
      return true;
  else if(!(10 < number && number < 20) && !(42 <= number && number < 75) && !(1 <= number && number <= 6)
    && (number != 10 && number != 20 && number !=75 ) )
      return true;
  else
      return false;
};

module.exports.nameAndPrice = function(name, price) {
  if(((name == 'NYTimes') || name == 'LATimes') && (price >= 1))
    return true;
  else
    return false;
};