// a router-level middleware
const router = require("express").Router();
// importing the apiRoutes from the index.js file located in the apiRoutes directory.
const apiRoutes = require("./apiRoutes");
// importing the htmlRoutes from the index.js file located in the htmlRoutes directory.
const htmlRoutes = require("./frontendRoutes");

// see /api and take it to the /apiRoutes/index.js
// this line prepends "/api" to every route declared inside "apiRoutes"
router.use("/api", apiRoutes);
// mount the routes defined in index.js within htmlRoutes directory on the root path of our application.
router.use(htmlRoutes);

module.exports = router;