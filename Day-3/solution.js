//Part 1
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-3/input').toString().split("\n");
var location = 0;
var trees = 0;
for (i=0; i<input.length; i++) {
	if (input[i].substr(location, 1) == "#") {
		trees = trees + 1;
	}
	if (location + 3 <= 30) {
		location = location + 3;
	} else {
		location = location + 3 - 31;
	}
}
console.log(trees);


//Part 2
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-3/input').toString().split("\n");
//Right 1, down 1
var location1 = 0;
var trees1 = 0;
for (i=0; i<input.length; i++) {
	if (input[i].substr(location1, 1) == "#") {
		trees1 = trees1 + 1;
	}
	if (location1 + 1 <= 30) {
		location1 = location1 + 1;
	} else {
		location1 = location1 + 1 - 31;
	}
}
//Right 3, down 1
var location2 = 0;
var trees2 = 0;
for (i=0; i<input.length; i++) {
	if (input[i].substr(location2, 1) == "#") {
		trees2 = trees2 + 1;
	}
	if (location2 + 3 <= 30) {
		location2 = location2 + 3;
	} else {
		location2 = location2 + 3 - 31;
	}
}
//Right 5, down 1
var location3 = 0;
var trees3 = 0;
for (i=0; i<input.length; i++) {
	if (input[i].substr(location3, 1) == "#") {
		trees3 = trees3 + 1;
	}
	if (location3 + 5 <= 30) {
		location3 = location3 + 5;
	} else {
		location3 = location3 + 5 - 31;
	}
}
//Right 7, down 1
var location4 = 0;
var trees4 = 0;
for (i=0; i<input.length; i++) {
	if (input[i].substr(location4, 1) == "#") {
		trees4 = trees4 + 1;
	}
	if (location4 + 7 <= 30) {
		location4 = location4 + 7;
	} else {
		location4 = location4 + 7 - 31;
	}
}
//Right 1, down 2
var location5 = 0;
var trees5 = 0;
for (i=0; i<input.length; i+=2) {
	if (input[i].substr(location5, 1) == "#") {
		trees5 = trees5 + 1;
	}
	if (location5 + 1 <= 30) {
		location5 = location5 + 1;
	} else {
		location5 = location5 + 1 - 31;
	}
}
console.log(trees1*trees2*trees3*trees4*trees5);