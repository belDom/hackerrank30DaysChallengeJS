const n = parseInt(5, 10);

// Base 10 to binary
var binaryNumber = '';
var consecutiveOnes = 0;
var maxConsecutives = 0;

var number = n;
while (number > 0) {
    var remainder = number % 2;
    number = Math.floor(number / 2);
    binaryNumber = remainder + binaryNumber;

    if (remainder == 1) {
        consecutiveOnes++;

        if (consecutiveOnes > maxConsecutives) {
            maxConsecutives = consecutiveOnes;
        }
    } else {
        consecutiveOnes = 0;
    }
}

console.log(maxConsecutives);
