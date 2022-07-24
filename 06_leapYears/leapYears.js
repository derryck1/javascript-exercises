const leapYears = function(year) {
    let a;

    if (((year % 100) == 0) && ((year % 400) != 0)) {
        a = false;
    } else if (((year % 4) == 0) && ((year % 400) == 0)) {
        a = true;
    } else if ((year % 4) == 0) {
        a = true;
    } else {
        a = false;
    }

    return a;
};

// Do not edit below this line
module.exports = leapYears;
