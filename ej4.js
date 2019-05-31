// Class vs. Instance

function Person(initialAge) {
    // Add some more code to run some checks on initialAge

    if (initialAge < 0) {
        this.age = 0;
        console.log('Age is not valid, setting age to 0.');
    } else {
        this.age = initialAge;
    }

    this.amIOld = function () {
        // Do some computations in here and print out the correct statement to the console
        if (this.age < 13) {
            console.log('You are young.');
        } else if (this.age >= 18) {
            console.log('You are old.')
        } else {
            console.log('You are a teenager.');
        }

    };
    this.yearPasses = function () {
        this.age++;
    };
}

var person = new Person(-1);

