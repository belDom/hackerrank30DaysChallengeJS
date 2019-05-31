function processData(input) {
    var inputInfo = input.split('\n');
    var n = parseInt(inputInfo[0]);
    var lines = inputInfo.length - parseInt(n);
    var phoneBook = {};

    for (var i = 1; i <= n; i++) {
        var register = inputInfo[i].split(' ');
        phoneBook[register[0]] = register[1];
    }

    for (var i = 1; i < lines; i++) {
        var name = inputInfo[i + n];
        if (phoneBook.hasOwnProperty(name)) {
            console.log(name + '=' + phoneBook[name]);
        } else {
            console.log('Not found');
        }
    }
} 

var data = '3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry'
processData(data);
