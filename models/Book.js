//Fake Database 
let books = [

    {
        "bookId": 1,
        "title": "Node.js",
        "author": {
            "authorId": 303,
            "firstname": "Edward",
            "lastname": "Jack"
        }
    }, 

    {
        "bookId": 2,
        "title": "Angular",
        "author": {
            "authorId": 308,
            "firstname": "John",
            "lastname": "Smith"
        }
    }
];

let idCounter = 2;

module.exports = class Book {
      
    //constructor 
    constructor(bookId, title, author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    //getBookId method 
    static getBookById(bookId) {
        let index = books.findIndex(b => b.bookId == bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error(`Book with id = ${bookId} is not found`);
        }
    }
    
    //save method 
    save() {
        this.bookId = ++idCounter;
        books.push(this);
        return this;
    }

    //getBookByAuthorFirstName method 
    static getBookByAuthorFirstName(letter) {
        let letterCapital = letter.toUpperCase();
        let letterSmall = letter.toLowerCase();
        let arr = books.filter(
          (b) =>
            b.author.firstname.indexOf(letterCapital) >= 0 ||
            b.author.firstname.indexOf(letterSmall) >= 0
        );
        if (arr.length > 0) {
            return arr;
        } else {
            throw new Error(`A book with author name having ${letter} is not found`);
        }
    }
}