const Book = require("../models/book");

// get all books
const book_index = (req, res) => {
    Book.find().sort({ createdAt: -1 }).then(result => {
        res.json({ books: result });
    })
    .catch(err => {
        console.log(err);
    })
};

// add a book to inventory
const book_create_post = (req, res) => {
    const book = new Book(req.body);
    book.save()
        .then(result => {
            console.log("book saved");
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        });
};

// get a single book
const book_details = (req, res) => {
    Book.findById(req.params.id)
        .then(result => {
            res.json({ book: result });
        })
        .catch(err => {
            console.log(err);
        });
};

const book_delete = (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(result => {
            res.send("Book deleted successfully");
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = {
    book_index,
    book_create_post,
    book_details,
    book_delete
};