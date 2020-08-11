
const express = require("express");
const router = express.Router();
const booksControllers = require("../controllers/booksController");

router
    .route("/books")
    .post(booksControllers.create)
    .get(booksControllers.findAll)

router
    .route("/books/:id")
    .delete(booksControllers.remove)
    .put(booksControllers.update)


module.exports = router;