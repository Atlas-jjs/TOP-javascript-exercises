// Credit to https://www.youtube.com/watch?v=Qru6rRxEzlY

const removeFromArray = function(anArray, ...args) {
    const newArray = [];

    anArray.forEach(element => {
        if (!args.includes(element)) {
            newArray.push(element);
        }
    });

    return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
console.log(removeFromArray([1, 2, 2, 3], 2));
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
console.log(removeFromArray([1, 2, 3, 4], 7, 2));
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log(removeFromArray([1, 2, 3], "1", 3));
// Do not edit below this line
module.exports = removeFromArray;
