const Genre = require("../models/genre"),
      Book = require("../models/book");

// get all genres
const genre_index = (req, res) => {
    Genre.find().sort({ createdAt: -1 }).then(result => {
        res.json({ genre: result });
    })
    .catch(err => {
        console.log(err);
    })
};

// add a genre to inventory
const genre_create_post = (req, res) => {
    Genre.create(req.body)
        .then(result => {
            Book.genres.push(result);
            Book.save();
            res.send("genre created successfully");
        })
        .catch(err => {
            console.log(err);
        });
};

// get a single genre
const genre_details = (req, res) => {
    genre.findById(req.params.id)
        .then(result => {
            res.json({ genre: result });
        })
        .catch(err => {
            console.log(err);
        });
};

const genre_delete = (req, res) => {
    Genre.findByIdAndDelete(req.params.id)
        .then(result => {
            res.send("genre deleted successfully");
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = {
    genre_index,
    genre_create_post,
    genre_details,
    genre_delete
};