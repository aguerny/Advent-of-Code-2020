//Part 1
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-10/input').toString().split("\n").map(Number);
var input = input.sort(function(a, b) {
    return a - b;
});
var currentVoltage = 0;
var oneJoltDifferences = 0;
var twoJoltDifferences = 0;
var threeJoltDifferences = 0;
for (i=0; i<input.length+1; i++) {
    if (i == input.length) {
        currentVoltage = currentVoltage + 3;
        threeJoltDifferences++;
    } else if (input[i] - currentVoltage == 1) {
        currentVoltage = input[i];
        oneJoltDifferences++;
    } else if (input[i] - currentVoltage == 2) {
        currentVoltage = input[i];
        twoJoltDifferences++;
    } else if (input[i] - currentVoltage == 3) {
        currentVoltage = input[i];
        threeJoltDifferences++;
    }
}
console.log(oneJoltDifferences * threeJoltDifferences);


//Part 2 - Not working
// var fs = require('fs');
// var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-10/input').toString().split("\n").map(Number);
// var input = input.sort(function(a, b) {
//     return a - b;
// });
// input.push(input[input.length-1] + 3);
// var possibilities = 1;
// for (i=0; i<input.length-1; i++) {
//     var newpossibilities = 0;
//     if (input[i+3] !== undefined && input[i+3] - input[i] <= 3) {
//         newpossibilities = 3;
//     } else if (input[i+2] !== undefined && input[i+2] - input[i] <= 3) {
//         newpossibilities = 2;
//     } else if (input[i+1] !== undefined && input[i+1] - input[i] <= 3) {
//         newpossibilities = 1;
//     }
//     if (newpossibilities > 1) {
//         possibilities = possibilities * newpossibilities;
//     }
// }
// console.log(possibilities);