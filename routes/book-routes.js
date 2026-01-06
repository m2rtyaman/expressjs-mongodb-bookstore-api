const express = require("express");
const {
  addNewBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
} = require("../controllers/book-controller");
//create express router
const router = express.Router();

router.get("/get", getAllBooks);

router.get("/get/:id", getSingleBook);
router.post("/add", addNewBook);

router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
