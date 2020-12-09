//Part 1
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-2/input').toString().split("\n");
var valid = 0;
for (i=0; i<input.length; i++) {
	var min = input[i].slice(0, input[i].indexOf("-"));
	var substr = input[i].substring(input[i].lastIndexOf("-") + 1, input[i].lastIndexOf(" "));
	var max = substr.substring(0, substr.length - 2);
	var letter = substr.slice(-2).substr(0,1);
	var password = input[i].substring(input[i].indexOf(":") + 2);
	if ((min <= password.split(letter).length-1) && (password.split(letter).length-1 <= max)) {
		valid = valid + 1;
	}
}
console.log(valid);


//Part 2
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-2/input').toString().split("\n");
var valid = 0;
for (i=0; i<input.length; i++) {
	var pos1 = input[i].slice(0, input[i].indexOf("-")) - 1;
	var substr = input[i].substring(input[i].lastIndexOf("-") + 1, input[i].lastIndexOf(" "));
	var pos2 = substr.substring(0, substr.length - 2) - 1;
	var letter = substr.slice(-2).substr(0,1);
	var password = input[i].substring(input[i].indexOf(":") + 2);
	if (password[pos1] === letter && password[pos2] !== letter) {
		valid = valid + 1
	} else if (password[pos1] !== letter && password[pos2] === letter) {
		valid = valid + 1
	}
}
console.log(valid);