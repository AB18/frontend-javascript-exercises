module.exports.formLetter = function(firstName, senderName, message) {
      var body = "Hello " +  firstName + "," + "\n\n" + message + "\n\n" + "Sincerely,\n" + senderName;
      return body;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var firstSubString = bigString.substring(startA, endA);
  var secondSubString = bigString.substring(startB,endB);
  return firstSubString + secondSubString;
};

module.exports.findFirstMatch = function(text, searchString) {
    return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
    return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
    return text.substring(text.indexOf(searchString) + searchString.length, text.lastIndexOf(searchString));
};