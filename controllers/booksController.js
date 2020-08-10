const express = require("express");
const router = express.Router();
const db = require("../models")


module.exports = {
    findAll: function (req, res) {
        db.Book.find({}).then(dbBooks => {
            res.json({
                error: false,
                data: dbBooks,
                message: "Successfully retrieved all saved books"
            })
        }).catch((err) => {
            res.status(500)
                .json({
                    error: true,
                    data: null,
                    message: "Unable to retrieve all saved books"
                })
        })
    },
    findById: function (req, res) {
        db.Post.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log('we hit hte create route in the controller!!!', req.body)
        db.Book.create(req.body).then(addedBook => {
            res.json({
                error: false,
                data: addedBook,
                message: "Successfully saved book"
            })
        }).catch((err) => {
            res.status(500)
                .json({
                    error: true,
                    data: null,
                    message: "Failed to add book"
                })
        })
    },
    update: function (req, res) {
        db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Post.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};










// router.get("/api/books", (req, res) => {
//     db.Book.find({}).then(dbBooks => {
//         res.json({
//             error: false,
//             data: dbBooks,
//             message: "Successfully retrieved all saved books"
//          })
//     }).catch((err) => {
//         res.status(500)
//             .json({
//                 error: true,
//                 data: null,
//                 message: "Unable to retrieve all saved books"
//         })
//     })
// })

// router.post("/api/saved/", (req, res) => {


//     db.Book.create(req.body).then(addedBook => {
//         res.json({
//             error: false,
//             data: addedBook,
//             message: "Successfully saved book"
//         })
//     }).catch((err) => {
//         res.status(500)
//             .json({
//                 error: true,
//                 data: null,
//                 message: "Failed to add book"
//             })
//     })
// })

// module.exports = router;
