// router-level middleware
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const frontendRoutes = require("./frontendRoutes");

// forwarding forward the user's request to another router level middleware if /api is hit
router.use("/api", apiRoutes);
// using index.js within "frontendRoutes"
router.use(frontendRoutes);


module.exports = router;