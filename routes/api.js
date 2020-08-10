
const express = require("express");
const router = express.Router();
const booksControllers = require("../controllers/booksController");
// goes with "/api/books"
//router.route("/api/books").get(booksControllers.findAll)

// goes with "/api/books/:id"
router
    .route("/api/books/")
    .post(booksControllers.create)
    .get(booksControllers.findAll)
    .put(booksControllers.update)
    .delete(booksControllers.remove);

module.exports = router;