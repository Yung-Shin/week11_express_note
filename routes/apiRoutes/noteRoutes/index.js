const router = require("express").Router();
// importing the required function from the userController.js inside the controller directory
const {
  getNote,
  postNote,
  deleteNote,
} = require("../../../controller/userController");
// if we ever hit this router
// it means the user has hit "/api/users" in the url
router
  .route("/")
  // get the note
  .get(getNote)
  // create the note
  .post(postNote);
// delete the note
router.route("/:id").delete(deleteNote);

module.exports = router;