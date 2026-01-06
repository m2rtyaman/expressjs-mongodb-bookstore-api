const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: [100, "Book Title can not be more than 100 chracters"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
    trim: true,
    maxLength: [100, "Author can not be more than 100 chracters"],
  },
  year: {
    type: Number,
    required: [true, "Publication year is required"],
    min: [1000, "Year mush be atleast 1000"],
    max: [new Date().getFullYear(), "Year cannot be in the future"],
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }
});
module.exports = mongoose.model("Book",BookSchema)