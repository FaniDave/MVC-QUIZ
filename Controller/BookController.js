const Book = require("../models/Book");

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.getBookById(req.params.bookId));
}

exports.save = (req, res, next) => {
    let newProduct = new Book(null, req.body.title, req.body.author);
    res.status(200).json(newProduct.save());
}

exports.getBookByAuthorFirstName = (req, res, next) => {
    let fn = Book.getBookByAuthorFirstName(req.query.firstname);
    res.status(200).json(fn);
}