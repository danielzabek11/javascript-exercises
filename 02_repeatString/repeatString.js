const repeatString = function(stringToMultiply, times) {
    if (times < 0) {
        return 'ERROR'
    }
    return stringToMultiply.repeat(times)

};
repeatString('hey', 3)
// Do not edit below this line
module.exports = repeatString;
