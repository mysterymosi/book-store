const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    books: [
    	{
    		type: mongoose.Schema.Types.ObjectId,
    		ref: "Book"
    	}
    ]
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;