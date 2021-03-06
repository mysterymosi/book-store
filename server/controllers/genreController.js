const Genre = require("../models/genre"),
      Book = require("../models/book");

// get all genres
const genre_index = (req, res) => {
    Genre.find().sort({ createdAt: -1 }).then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
    })
};

// add a genre to inventory
const genre_create_post = (req, res) => {
    Genre.create(req.body)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        });
};

// get a single genre
const genre_details = (req, res) => {
    Genre.findById(req.params.id).populate("books")
        .then(result => {
            res.json(result);
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