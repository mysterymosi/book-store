const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;