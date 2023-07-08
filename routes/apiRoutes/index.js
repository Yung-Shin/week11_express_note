// router-level middleware
const router = require("express").Router();
const noteRoutes = require("./noteRoutes");

// prepends "/api/notes" to every route declared in "noteRoutes"
router.use("/notes", noteRoutes);


module.exports = router;