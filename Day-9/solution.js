//Part 1
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-9/input').toString().split("\n").map(Number);
for (i=26; i<input.length; i++) {
    var prev25 = input.slice(i-26,i);
    var matchingPair = false;
    for (j=0; j<25; j++) {
        for (k=0; k<25; k++) {
            if (j<k) {
                if (prev25[j] + prev25[k] == prev25[25]) {
                    matchingPair = true;
                }
            }
        }
    }
    if (matchingPair == false) {
        console.log(prev25[25]);
    }
}


//Part 2
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-9/input').toString().split("\n").map(Number);
var invalidNumber = 257342611;
for (i=0; i<input.length; i++) {
    var currentSum = input[i];
    var nextNumberIndex = i+1;
    var numbers = [input[i]];
    while (currentSum <= 257342611) {
        currentSum = currentSum + input[nextNumberIndex];
        numbers.push(input[nextNumberIndex]);
        if (currentSum == invalidNumber) {
            var smallest = Math.min.apply(Math, numbers);
            var largest = Math.max.apply(Math, numbers);
            console.log(smallest + largest);
        }
        nextNumberIndex++;
    }
}