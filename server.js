const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes")


var app = express();



const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.use(routes)

app.get("/api/config", (req, res) => {
    res.json({
        success: true
    });
})

//when no other route matches, this get hit
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

mongoose
    .connect(process.env.MONGOD_URI || "mongodb://localhost/googlebooks",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => {
        console.log("connected to the database")
    })
    .catch((err) => {
        console.log("unable to connect to the database")
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`)
})