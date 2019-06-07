// Day 17: More Exceptions

class Calculator {
    power(n, p) {
        if (n >= 0 && p >= 0) {
            return Math.pow(n, p);
        }

        return 'n and p should be non-negative';
    }
}

var myCalculator = new Calculator();
console.log(myCalculator.power(-1, -2));
