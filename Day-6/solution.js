//Part 1
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-6/input').toString().split("\n\n");
var sum = 0;
for (var i=0; i<input.length; i++) {
    var letters = input[i].replace(/\n/g, '').split('');
    var sum = sum + letters.filter(function(val, i, arr) { 
        return arr.indexOf(val) === i;
    }).length;
}
console.log(sum);


//Part 2
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-6/input').toString().split("\n\n");
var sum = 0;
for (var i=0; i<input.length; i++) {
    var people = input[i].split('\n').length;
    var answers = input[i].replace(/\n/g, '');
    var allyes = 0;
    for (j=0; j<answers.length; j++) {
        if ((answers.split(answers[j]).length - 1) == people) {
            allyes++;
        }
    }
    sum = sum + (allyes/people);
}
console.log(sum);