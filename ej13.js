// Day 13: Abstract Classes

class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.');
        } else {
            this.title = title;
            this.author = author;
        }
    }

    display() {
        console.log('Implement the \'display\' method!')
    }
}

class MyBook extends Book {
    constructor(title, author, price) {
        super(title, author);
        this.price = price;
    }

    display() {
        console.log('Title: ' + this.title);
        console.log('Author: ' + this.author);
        console.log('Price: ' + this.price);
    }
}

var b = new MyBook('The Alchemist', 'Paulo Coelho', 248);
b.display();