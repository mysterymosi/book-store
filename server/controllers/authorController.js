const Author = require("../models/author"),
      Book   = require("../models/book");

// get all authors
const author_index = (req, res) => {
    Author.find().sort({ createdAt: -1 }).then(result => {
        res.json({ author: result });
    })
    .catch(err => {
        console.log(err);
    })
};

// add a author to inventory
const author_create_post = (req, res) => {
    Author.create(req.body)
        .then(result => {
            Book.authors.push(result);
            Book.save();
            res.send("author created successfully");
        })
        .catch(err => {
            console.log(err);
        });
};

// get a single author
const author_details = (req, res) => {
    Author.findById(req.params.id)
        .then(result => {
            res.json({ author: result });
        })
        .catch(err => {
            console.log(err);
        });
};

const author_delete = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(result => {
            res.send("author deleted successfully");
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = {
    author_index,
    author_create_post,
    author_details,
    author_delete
};