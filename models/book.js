const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  id: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;