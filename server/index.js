const express = require("express"),
    mongoose = require("mongoose"),
    bookRoutes = require("./routes/bookRoutes"),
    authorRoutes = require("./routes/authorRoutes"),
    genreRoutes = require("./routes/genreRoutes"),
    Book = require("./models/book"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost/book_store", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(3000, () => {
            console.log("server listening on port 3000");
        });
    })
    .catch(err => console.log(err));

app.use(bodyParser.json());    
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/genres", genreRoutes);