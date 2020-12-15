//Part 1
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-7/input').toString().split("\n");
var shinyGold = 0;
var bags = [];
var contents = [];
var bagsContainingShinyGold = [];
for (var i=0; i<input.length; i++) {
    bags.push(input[i].slice(0, input[i].indexOf(" bags contain")));
    contents.push(input[i].split("contain ").pop().split(", "));
}
for (i=0; i<bags.length; i++) {
    contents[i].forEach(function(item) {
        if (item.indexOf('shiny gold') > -1) {
            bagsContainingShinyGold.push(bags[i]);
        }
    })
}
for (i=0; i<bags.length; i++) {
    for (j=0; j<bagsContainingShinyGold.length; j++) {
        contents[i].forEach(function(item) {
            if (item.indexOf(bagsContainingShinyGold[j]) > -1) {
                if(bagsContainingShinyGold.indexOf(bags[i]) === -1) {
                    bagsContainingShinyGold.push(bags[i]);
                }
            }
        })
    }
}
for (i=0; i<bags.length; i++) {
    for (j=0; j<bagsContainingShinyGold.length; j++) {
        contents[i].forEach(function(item) {
            if (item.indexOf(bagsContainingShinyGold[j]) > -1) {
                if(bagsContainingShinyGold.indexOf(bags[i]) === -1) {
                    bagsContainingShinyGold.push(bags[i]);
                }
            }
        })
    }
}
for (i=0; i<bags.length; i++) {
    for (j=0; j<bagsContainingShinyGold.length; j++) {
        contents[i].forEach(function(item) {
            if (item.indexOf(bagsContainingShinyGold[j]) > -1) {
                if(bagsContainingShinyGold.indexOf(bags[i]) === -1) {
                    bagsContainingShinyGold.push(bags[i]);
                }
            }
        })
    }
}
for (i=0; i<bags.length; i++) {
    for (j=0; j<bagsContainingShinyGold.length; j++) {
        contents[i].forEach(function(item) {
            if (item.indexOf(bagsContainingShinyGold[j]) > -1) {
                if(bagsContainingShinyGold.indexOf(bags[i]) === -1) {
                    bagsContainingShinyGold.push(bags[i]);
                }
            }
        })
    }
}
for (i=0; i<bags.length; i++) {
    for (j=0; j<bagsContainingShinyGold.length; j++) {
        contents[i].forEach(function(item) {
            if (item.indexOf(bagsContainingShinyGold[j]) > -1) {
                if(bagsContainingShinyGold.indexOf(bags[i]) === -1) {
                    bagsContainingShinyGold.push(bags[i]);
                }
            }
        })
    }
}
for (i=0; i<bags.length; i++) {
    for (j=0; j<bagsContainingShinyGold.length; j++) {
        contents[i].forEach(function(item) {
            if (item.indexOf(bagsContainingShinyGold[j]) > -1) {
                if(bagsContainingShinyGold.indexOf(bags[i]) === -1) {
                    bagsContainingShinyGold.push(bags[i]);
                }
            }
        })
    }
}
console.log(bagsContainingShinyGold.length);


//Part 2 - Not working
// var fs = require('fs');
// var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-7/input').toString().split("\n");
// var totalBags = 0;
// var bags = [];
// var contents = [];
// var bagsContained = [];
// for (var i=0; i<input.length; i++) {
//     bags.push(input[i].slice(0, input[i].indexOf(" bags contain")));
//     contents.push(input[i].split("contain ").pop().split(", "));
//     // var sum = 0;
//     // contents[i].forEach(function(item) {
//     //     sum = parseInt(sum) + parseInt(item.substr(0,item.indexOf(' ')));
//     // })
//     // bagsContained.push(sum);
// }


// var theseBags = ['1 shiny gold bag'];
// var numTheseBags = [];
// var nextBags = [];
// var finalCalculation = 0;


// for (i=0; i<theseBags.length; i++) {
//     var numBags = parseInt(theseBags[i].substr(0,theseBags[i].indexOf(' ')));
//     var numSubBags = 0;
//     var bagName = theseBags[i].split(" ").slice(1, -1).join(" ");
//     var index = bags.indexOf(bagName);
//     contents[index].forEach(function(item) {
//         if (item !== "no other bags.") {
//             numSubBags = numSubBags + parseInt(item.substr(0,item.indexOf(' ')));
//             nextBags.push(item);
//         }
//     })
//     finalCalculation = (numBags*numSubBags);
// }
// theseBags = nextBags;
// nextBags = [];
// for (i=0; i<theseBags.length; i++) {
//     var numBags = parseInt(theseBags[i].substr(0,theseBags[i].indexOf(' ')));
//     var numSubBags = 0;
//     var bagName = theseBags[i].split(" ").slice(1, -1).join(" ");
//     var index = bags.indexOf(bagName);
//     contents[index].forEach(function(item) {
//         if (item !== "no other bags.") {
//             numSubBags = numSubBags + parseInt(item.substr(0,item.indexOf(' ')));
//             nextBags.push(item);
//         } else {
//             numSubBags = 1;
//         }
//     })
//     finalCalculation = (finalCalculation*numSubBags);
// }
// theseBags = nextBags;
// nextBags = [];
// for (i=0; i<theseBags.length; i++) {
//     var numBags = parseInt(theseBags[i].substr(0,theseBags[i].indexOf(' ')));
//     var numSubBags = 0;
//     var bagName = theseBags[i].split(" ").slice(1, -1).join(" ");
//     var index = bags.indexOf(bagName);
//     contents[index].forEach(function(item) {
//         if (item !== "no other bags.") {
//             numSubBags = numSubBags + parseInt(item.substr(0,item.indexOf(' ')));
//             nextBags.push(item);
//         } else {
//             numSubBags = 1;
//         }
//     })
//     finalCalculation = (finalCalculation*numSubBags);
// }
// theseBags = nextBags;
// nextBags = [];
// for (i=0; i<theseBags.length; i++) {
//     var numBags = parseInt(theseBags[i].substr(0,theseBags[i].indexOf(' ')));
//     var numSubBags = 0;
//     var bagName = theseBags[i].split(" ").slice(1, -1).join(" ");
//     var index = bags.indexOf(bagName);
//     contents[index].forEach(function(item) {
//         if (item !== "no other bags.") {
//             numSubBags = numSubBags + parseInt(item.substr(0,item.indexOf(' ')));
//             nextBags.push(item);
//         } else {
//             numSubBags = 1;
//         }
//     })
//     finalCalculation = (finalCalculation*numSubBags);
// }
// theseBags = nextBags;
// nextBags = [];
// for (i=0; i<theseBags.length; i++) {
//     var numBags = parseInt(theseBags[i].substr(0,theseBags[i].indexOf(' ')));
//     var numSubBags = 0;
//     var bagName = theseBags[i].split(" ").slice(1, -1).join(" ");
//     var index = bags.indexOf(bagName);
//     contents[index].forEach(function(item) {
//         if (item !== "no other bags.") {
//             numSubBags = numSubBags + parseInt(item.substr(0,item.indexOf(' ')));
//             nextBags.push(item);
//         } else {
//             numSubBags = 1;
//         }
//     })
//     finalCalculation = (finalCalculation*numSubBags);
// }
// theseBags = nextBags;
// nextBags = [];
// for (i=0; i<theseBags.length; i++) {
//     var numBags = parseInt(theseBags[i].substr(0,theseBags[i].indexOf(' ')));
//     var numSubBags = 0;
//     var bagName = theseBags[i].split(" ").slice(1, -1).join(" ");
//     var index = bags.indexOf(bagName);
//     contents[index].forEach(function(item) {
//         if (item !== "no other bags.") {
//             numSubBags = numSubBags + parseInt(item.substr(0,item.indexOf(' ')));
//             nextBags.push(item);
//         } else {
//             numSubBags = 1;
//         }
//     })
//     finalCalculation = (finalCalculation*numSubBags);
// }
// theseBags = nextBags;
// nextBags = [];
// for (i=0; i<theseBags.length; i++) {
//     var numBags = parseInt(theseBags[i].substr(0,theseBags[i].indexOf(' ')));
//     var numSubBags = 0;
//     var bagName = theseBags[i].split(" ").slice(1, -1).join(" ");
//     var index = bags.indexOf(bagName);
//     contents[index].forEach(function(item) {
//         if (item !== "no other bags.") {
//             numSubBags = numSubBags + parseInt(item.substr(0,item.indexOf(' ')));
//             nextBags.push(item);
//         } else {
//             numSubBags = 1;
//         }
//     })
//     finalCalculation = (finalCalculation*numSubBags);
// }
// console.log(finalCalculation);