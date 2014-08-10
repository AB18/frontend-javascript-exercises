module.exports.reversePlusOne = function(reverse){
    reverse.reverse();
    console.log(reverse);
    reverse.unshift(1);
    return reverse;
};

module.exports.plusesEverywhere = function(combine) {
    var length = combine.length - 1;
    var combined = '';
    for(var i=0; i<= length ; i++)
    {
      if(i > 0)
      {
        combined += "+";
      }
      combined += combine[i];
    }
    return combined;
};

module.exports.arrayQuantityPlusOne = function(total){
    return (total.length + 1);

};