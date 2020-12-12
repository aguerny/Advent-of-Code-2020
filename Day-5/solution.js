//Part 1
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-5/input').toString().split("\n");
var highestId = 0;
for (var i=0; i<input.length; i++) {
    var rowMin = 0;
    var rowMax = 127;
    for (var j=0; j<7; j++) {
        if (input[i].charAt(j) == "F") {
            var diff = (rowMax-rowMin)/2;
            var rowMin = rowMin;
            var rowMax = Math.floor(diff) + rowMin;
        } else if (input[i].charAt(j) == "B") {
            var diff = (rowMax-rowMin)/2;
            var rowMin = Math.ceil(diff) + rowMin;
            var rowMax = rowMax;
        }
    }
    var seatMin = 0;
    var seatMax = 7;
    for (var k=7; k<10; k++) {
        if (input[i].charAt(k) == "L") {
            var diff = (seatMax-seatMin)/2;
            var seatMin = seatMin;
            var seatMax = Math.floor(diff) + seatMin;
        } else if (input[i].charAt(k) == "R") {
            var diff = (seatMax-seatMin)/2;
            var seatMin = Math.ceil(diff) + seatMin;
            var seatMax = seatMax;
        }
    }
    var seatId = (rowMin * 8) + seatMin;
    if (seatId > highestId) {
        highestId = seatId;
    }
    
}
console.log(highestId);


//Part 2
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-5/input').toString().split("\n");
var seats = [];
for (var i=0; i<input.length; i++) {
    var rowMin = 0;
    var rowMax = 127;
    for (var j=0; j<7; j++) {
        if (input[i].charAt(j) == "F") {
            var diff = (rowMax-rowMin)/2;
            var rowMin = rowMin;
            var rowMax = Math.floor(diff) + rowMin;
        } else if (input[i].charAt(j) == "B") {
            var diff = (rowMax-rowMin)/2;
            var rowMin = Math.ceil(diff) + rowMin;
            var rowMax = rowMax;
        }
    }
    var seatMin = 0;
    var seatMax = 7;
    for (var k=7; k<10; k++) {
        if (input[i].charAt(k) == "L") {
            var diff = (seatMax-seatMin)/2;
            var seatMin = seatMin;
            var seatMax = Math.floor(diff) + seatMin;
        } else if (input[i].charAt(k) == "R") {
            var diff = (seatMax-seatMin)/2;
            var seatMin = Math.ceil(diff) + seatMin;
            var seatMax = seatMax;
        }
    }
    seats.push((rowMin * 8) + seatMin);
}
var highestSeatId = (127 * 8) + 7;
seats.sort(function (a, b) {
    return a - b;
})
var firstSeat = seats[0];
var lastSeat = seats[seats.length - 1];
for (l=firstSeat; l<=lastSeat; l++) {
    if (seats.indexOf(l) == -1) {
        console.log(l);
    }
}