const router = require("express").Router();

// importing functions from userController.js
const {
  getNote,
  postNote,
  deleteNote,
} = require("../../../controller/userController");

/* MVC  Model-View-Controller*/

router
  .route("/")
  .get(getNote)
  .post(postNote);
router.route("/:id").delete(deleteNote);


module.exports = router;