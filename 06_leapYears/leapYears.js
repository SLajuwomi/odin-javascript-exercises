const leapYears = function(givenYear) {
    if ((givenYear % 100) == 0 && givenYear % 400 != 0) {
        return false;
    } else if (((givenYear % 4) == 0) || ((givenYear % 400) == 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
