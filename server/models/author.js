const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;