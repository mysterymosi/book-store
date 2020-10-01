const Book = require("../models/book"),
      Author = require("../models/author"),
      Genre = require("../models/genre");

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
    // create and save a book
    Book.create(req.body)
        .then(book => {
            console.log("book saved");
            // find author of the book using the author id on the book instance
            Author.findById(book.authorId)
                .then(author => {
                    // push book to the books array on the author instance
                    author.books.push(book);
                    // save author instance
                    author.save()
                        .then(result => {
                            console.log("Author saved: " + result);
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            // find genre of the book using the genre id on the book instance
            Genre.findById(book.genreId)
                .then(genre => {
                    // push book to the books array on the genre instance
                    genre.books.push(book);
                    // save genre instance
                    genre.save()
                        .then(result => {
                            console.log("genre saved: " + result);
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            // send the book back to the user
            res.status(200).json(book);
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