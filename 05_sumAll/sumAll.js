const sumAll = function(start, end) {
    if(start < 0 || end < 0 || typeof start !== "number" || typeof end !== "number") {
        return 'ERROR'
    }

    if(start > end) {
        [start, end] = [end, start];
    }

    let sum = 0;
    for(i=start; i<=end; i++) {
        sum += i
    }
    return sum
};
sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
