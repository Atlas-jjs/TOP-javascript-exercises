const leapYears = function(num) {
    if (Number.isInteger(num / 4) || Number.isInteger(num / 400)) {
        if (Number.isInteger(num / 4) &&
        Number.isInteger(num / 100) &&
        Number.isInteger(num / 400)) {
            return true;
        } else if (Number.isInteger(num / 100)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
    
};

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
