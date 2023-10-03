const Board = require("../models/board");
const List = require("../models/list");
const Card = require("../models/card");
const Subtask = require("../models/subtask");
const User = require("../models/account");

const { Types } = require("mongoose");
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

// get all user's boards

exports.get_user_boards = async (req, res) => {
  res.send("get all user's boards ");
};

// get selected board lists , cards and subtasks on GET
exports.board_get = async (req, res) => {
  res.send("get selected board lists , cards and subtasks on GET ");
};

// Create board on POST
exports.create_board_post = async (req, res) => {
  res.send("Create board on POST");
};

// Handle board delete on DELETE
exports.board_delete = async (req, res) => {
  res.send("Handle board delete on DELETE");
};

//Handle board update on PATCH
exports.update_board_patch = async (req, res) => {
  res.send("handle board delete on delete");
};


