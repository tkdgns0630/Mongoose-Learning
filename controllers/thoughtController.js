const { Thought, User } = require("../models");

module.exports = {
  // Function to get all of the thoughts by invoking the find() method with no arguments.
  // Then we return the results as JSON, and catch any errors. Errors are sent as JSON with a message and a 500 status code
  async getAllThought(req, res) {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Gets a single thought using the findOneAndUpdate method. We pass in the ID of the thought and then respond with it, or an error if not found
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Creates a new application. User gets updated with ID since it references thought.
  // Because thoughts are associated with Users, we then update the User.

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: { _id: thought._id } } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: "Thought created, but found no user with that ID",
        });
      }

      res.json("Created the thought 🎉");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Updates thought using the findOneAndUpdate method.
  // Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Deletes a thought from the database. Looks for a thought by ID.
  // Then if the thought exists, we look for any users associated with
  // the thought based on he thought ID and update the thought Id for the User.
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: "Thought deleted but no user with that thought!",
        });
      }

      res.json({ message: "Thought successfully deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Adds a thought to a user.
  //This method is unique in that we add the entire body of the thought rather than the ID with the mongodb $addToSet operator.
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove thought reaction. This method finds the thought based on ID.
  // It then updates the reaction array associated with the thought in question by removing it's reactionId from the tags array.
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
