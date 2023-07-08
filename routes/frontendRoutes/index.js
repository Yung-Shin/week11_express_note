const router = require("express").Router();
const path = require("path");

// route for front-end files located in public folder
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// route handler function for GET requests for undefined routes
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});


module.exports = router;