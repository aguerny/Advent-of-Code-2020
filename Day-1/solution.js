//Part 1
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-1/input').toString().split("\n").map(Number);
for (i=0; i<input.length; i++) {
	for (j=0; j<input.length; j++) {
		if (i<j) {
			if (input[i] + input[j] == 2020) {
				console.log("Part 1: " + input[i]*input[j]);
			}
		}
	}
}


//Part 2
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-1/input').toString().split("\n").map(Number);
for (i=0; i<input.length; i++) {
	for (j=0; j<input.length; j++) {
		for (k=0; k<input.length; k++) {
			if (i<j && i<k && j<k) {
				if (input[i] + input[j] + input[k] == 2020) {
					console.log("Part 2: " + input[i]*input[j]*input[k]);
				}
			}
		}
	}
}