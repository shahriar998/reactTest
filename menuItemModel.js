const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String },
  
});

const Book = mongoose.model("menuItem", bookSchema);

module.exports = Book;