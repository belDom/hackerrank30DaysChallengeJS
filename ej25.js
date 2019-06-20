// Day 25: Running Time and Complexity

function isPrime(number) {
    if (number <= 1)
        return false;

    // The check for the number 2 and 3
    if (number <= 3)
        return true;

    if (number % 2 == 0 || number % 3 == 0)
        return false;

    for (var i = 5; i * i <= number; i = i + 6) {
        if (number % i == 0 || number % (i + 2) == 0)
            return false;
    }

    return true;
}

function processData(input) {
    let data = input.split('\n');

    for (let i = 1; i < data.length; i++) {
        let number = parseInt(data[i]);
        if (isPrime(number)) {
            console.log('Prime');
        } else {
            console.log('Not prime');
        }
    }
}

// var data = "3\n12\n5\n7";
var data = "3\n31\n33"
processData(data);
