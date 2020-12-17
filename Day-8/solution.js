//Part 1
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-8/input').toString().split("\n");
var accumulator = 0;
var instructionsExecuted = [];
var currentInstruction = 0;

while (instructionsExecuted.indexOf(currentInstruction) == -1) {
    var instruction = input[currentInstruction].substr(0,3);
    var amount = parseInt(input[currentInstruction].substr(4,input[currentInstruction].length-1));
    instructionsExecuted.push(currentInstruction);
    if (instruction == "acc") {
        accumulator = accumulator + amount;
        currentInstruction = currentInstruction + 1;
    } else if (instruction == "jmp") {
        currentInstruction = currentInstruction + amount;
    } else if (instruction == "nop") {
        currentInstruction = currentInstruction + 1;
    }
}

console.log(accumulator);


//Part 2
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-8/input').toString().split("\n");
for (i=0; i<input.length; i++) {
    input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-8/input').toString().split("\n");

    var accumulator = 0;
    var instructionsExecuted = [];
    var currentInstruction = 0;
    
    if (input[i].substr(0,3) == "jmp") {
        input[i] = "nop " + input[i].substr(4,input[i].length-1);
    } else if (input[i].substr(0,3) == "nop") {
        input[i] = "jmp " + input[i].substr(4,input[i].length-1);
    }

    while (instructionsExecuted.indexOf(currentInstruction) == -1 && currentInstruction < input.length) {
        var instruction = input[currentInstruction].substr(0,3);
        var amount = parseInt(input[currentInstruction].substr(4,input[currentInstruction].length-1));
        instructionsExecuted.push(currentInstruction);
        if (instruction == "acc") {
            accumulator = accumulator + amount;
            currentInstruction = currentInstruction + 1;
            if (currentInstruction >= input.length) {
                console.log(accumulator);
            }
        } else if (instruction == "jmp") {
            currentInstruction = currentInstruction + amount;
            if (currentInstruction >= input.length) {
                console.log(accumulator);
            }
        } else if (instruction == "nop") {
            currentInstruction = currentInstruction + 1;
            if (currentInstruction >= input.length) {
                console.log(accumulator);
            }
        }
    }
}