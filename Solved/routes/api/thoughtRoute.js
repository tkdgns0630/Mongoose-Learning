const router = require("express").Router();
const {
  getAllThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/applications
router.route("/").get(getAllThought).post(createThought);

// /api/applications/:applicationId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/applications/:applicationId/tags
router.route("/:thoughtId/reaction").post(addReaction);

// /api/applications/:applicationId/tags/:tagId
router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
