const List = require("../models/list");
const Card = require("../models/card");
const { body, validationResult } = require("express-validator");

// Handle get list on GET
exports.list_get = async (req, res) => {
  res.send("get list");
};

// Handle create new list on POST
exports.create_list_post = [
  // Validate form field
  body("listTitle", "Title must not be empty.").isLength({ min: 1, max: 64 }),

  async (req, res) => {
    res.send("create new list");
  },
];

// Handle list update on PUT
exports.update_list_put = [
  // Validate form fields
  body("listTitle", "Title must not be empty.").isLength({ min: 1, max: 64 }),

  async (req, res) => {
    res.send("tessst");
  },
];

// Handle list delete
exports.list_delete = async (req, res) => {
  res.send("test");
};
