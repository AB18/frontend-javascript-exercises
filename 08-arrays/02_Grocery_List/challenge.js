module.exports.addItem = function(item, groceryArray){
    if(groceryArray.indexOf(item) < 0)
    {
        groceryArray.push(item);
    }
    return groceryArray;
};

module.exports.reverseSortedList = function(reverseSorted){
    return (reverseSorted.sort()).reverse();

};