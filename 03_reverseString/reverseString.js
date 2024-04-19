const reverseString = function(stringToReverse) {
    let wordsArray = stringToReverse.split("");
    return wordsArray.reverse().join("");

};
reverseString('hello there') 
// Do not edit below this line
module.exports = reverseString;
