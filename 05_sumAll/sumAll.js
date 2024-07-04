const sumAll = function(start, end) {
    if (typeof start != "number" || typeof end != "number") {
        return "ERROR"
    }
    if (start < 0 || end <0) {
        return ("ERROR")
    }
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    let i=start;
    let numRange = [start];
    let currentSum;
    let finalSum;
    while (i<end) {
        numRange.push(i+=1)
    }

    for (let x = 0; x<numRange.length; x++) {
        for (let j=1; j<numRange.length; j++) {
            if (currentSum == null) {
                currentSum = numRange[x] + numRange[j]
            } else {
                currentSum = currentSum + numRange[j]
            }
        }
        break;
    }
    finalSum = currentSum;
    console.log(finalSum)
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
