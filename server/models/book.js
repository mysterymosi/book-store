const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,

    genres: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Genre"
        }
    ],

    authors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        }
    ],

    quantity: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;