const Book = require("../models/Book");
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List at books fetched successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Bo Books found in Collection",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong! please try again ",
    });
  }
};
const getSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const currentBook = await Book.findById(id);
    if (currentBook) {
      res.status(200).json({
        success: true,
        message: "find book with id, successfully",
        data: currentBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "404 Not Found, please try again with different id",
        data: currentBook,
      });
    }
  } catch (err) {
    console.log("Something went wrong, please try again ");
  }
};
const addNewBook = async (req, res) => {
  try {
    const newBooksFormData = req.body;
    const newlyCreatedBook = await Book.create(newBooksFormData);
    if (newBooksFormData) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
const updateBook = async (req, res) => {
  try {
    const formData = req.body;
    const BookID = req.params.id;
    const currentBook = await Book.findByIdAndUpdate(BookID, formData, {
      new: true,
      runValidators: true,
    });
    if (currentBook) {
      res.status(200).json({
        success: true,
        message: "Book updated Successfully",
        data: currentBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "404 Not Found, please try again with different id",
        data: currentBook,
      });
    }
  } catch (err) {
    console.log("Something went wrong, please try again ");
  }
};
const deleteBook = async (req, res) => {
  try {
    const currentBookDelete = await Book.findByIdAndDelete(req.params.id, {
      news: true,
      runValidators: true,
    });
    if (currentBookDelete) {
      res.status(200).json({
        success: true,
        message: "Current Books is deleted,successfully",
        data: currentBookDelete,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found please try again with different id",
      });
    }
  } catch (err) {
    console.log("Something went wrong, please try again ");
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
};
