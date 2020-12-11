//Part 1
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-4/input').toString().split("\n\n");
var passports = [];
var validPassports = 0;
for (var i=0; i<input.length; i++) {
    var obj = {};
    var currentPassport = input[i].split(/[\n\r\s]+/);
    currentPassport.forEach(function(property) {
        var part = property.split(':');
        obj[part[0]] = part[1];
    });
    passports.push(obj);
}
for (var j=0; j<passports.length; j++) {
    if (('byr' in passports[j]) && ('iyr' in passports[j]) && ('eyr' in passports[j]) && ('hgt' in passports[j]) && ('hcl' in passports[j]) && ('ecl' in passports[j]) && ('pid' in passports[j])) {
        var validPassports = validPassports + 1;
    }
}
console.log(validPassports);


//Part 2
var fs = require('fs');
var input = fs.readFileSync('/media/media/Documents/GitHub/Advent-of-Code-2020/Day-4/input').toString().split("\n\n");
var passports = [];
var validPassports = 0;
for (var i=0; i<input.length; i++) {
    var obj = {};
    var currentPassport = input[i].split(/[\n\r\s]+/);
    currentPassport.forEach(function(property) {
        var part = property.split(':');
        obj[part[0]] = part[1];
    });
    passports.push(obj);
}
for (var j=0; j<passports.length; j++) {
    if (('byr' in passports[j]) && ('iyr' in passports[j]) && ('eyr' in passports[j]) && ('hgt' in passports[j]) && ('hcl' in passports[j]) && ('ecl' in passports[j]) && ('pid' in passports[j])) {
        if (passports[j].byr >= 1920 && passports[j].byr <= 2002) {
            if (passports[j].iyr >= 2010 && passports[j].iyr <= 2020) {
                if (passports[j].eyr >= 2020 && passports[j].eyr <= 2030) {
                    var height = parseFloat(passports[j].hgt.substring(0, passports[j].hgt.length - 2));
                    var unit = passports[j].hgt.slice(-2);
                    if ((unit == "cm" && height >= 150 && height <= 193) || (unit == "in" && height >= 59 && height <= 76)) {
                        var color = passports[j].hcl;
                        if (color.length == 7 && color.substr(0,1) == "#" && color.slice(-6).match("^[A-Fa-f0-9]+$")) {
                            if (['amb','blu','brn','gry','grn','hzl','oth'].indexOf(passports[j].ecl) > -1) {
                                var id = passports[j].pid;
                                if (id.length == 9 && id.match("^[0-9]+$")) {
                                    validPassports = validPassports + 1;
                                }
                            } 
                        } 
                    } 
                } 
            } 
        } 
    }
}
console.log(validPassports);