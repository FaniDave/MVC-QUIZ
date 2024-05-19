const express = require("express");
const BookController = require("../Controller/BookController");

const router = express.Router();

//Middleware 
router.get("/books/:bookId", BookController.getBookById);
router.post("/books", BookController.save);
router.get("/books", BookController.getBookByAuthorFirstName);

module.exports = router;