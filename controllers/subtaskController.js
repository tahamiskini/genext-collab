const SubTask = require("../models/subtask");
const { body, validationResult } = require("express-validator");

exports.create_subtask_post = [
  body("taskName", "Subtask name must not be empty.").isLength({
    min: 1,
    max: 64,
  }),

  async (req, res) => {
    res.send("tessst");
  },
];

exports.edit_subtask_put = [
  body("isDone", "Must have a value").isBoolean(),

  async (req, res) => {
    res.send("tesst");
  },
];

exports.subtask_delete = async (req, res) => {
  res.send("delete tesst");
};
