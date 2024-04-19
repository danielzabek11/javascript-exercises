const removeFromArray = function(arr, ...elementToRemove) {
/*     newArr = [];

    for (const element of arr) {
        if(!elementToRemove.includes(element)) {
            newArr.push(element);
        }
    }
    return newArr; */
    return arr.filter((element) => !elementToRemove.includes(element));
};
removeFromArray([1, 2, 3, 4], 3); 
// Do not edit below this line
module.exports = removeFromArray;
