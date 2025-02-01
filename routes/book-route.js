const express = require("express");
const {
  getAllBooks,
  getBook,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controller/book-controller");

//create express router
const router = express.Router();

//all routers that are related to books only
router.get("/get", getAllBooks);
router.get("/get/:id", getBook);
router.post("/add", addNewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);


module.exports = router;