
const path = require("path");
const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");

// API Routes
router.use("/", apiRoutes);

router.use((_, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;