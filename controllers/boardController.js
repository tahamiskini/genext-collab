const Board = require("../models/board");
const List = require("../models/list");
const Card = require("../models/card");
const Subtask = require("../models/subtask");
const User = require("../models/account");

const { Types } = require("mongoose");
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

exports.get_user_boards = async (req, res) => {
  try {
    const userId = Types.ObjectId(req.user.id);
    const boards = await Board.find({
      $or: [
        { creatorId: userId }, // Find boards where the user is the creator
        { "collaborators.userId": userId }, // Find boards where the user is a collaborator
      ],
    });
    // const { userId } = req.params;
    // const user = await User.find({ _id: userId });
    // const boards = user.boards;
    res.send(boards);
  } catch (error) {
    res.sendStatus(404);
  }
};

// get selected board lists , cards and subtasks on GET
exports.board_get = async (req, res) => {
  try {
    const boardId = Types.ObjectId(req.params.id);

    // fetch the board
    const board = await Board.findOne({ _id: boardId, creatorId: req.user.id });

    if (!board) {
      return res.sendStatus(404);
    }

    // fetch the lists associated with the board
    const lists = await List.find({ boardId: board._id });

    // fetch the cards and subtasks associated with each list
    const cards = [];
    for (const list of lists) {
      const listCards = await Card.find({ listId: list._id });
      const cardsWithSubtasks = [];

      for (const card of listCards) {
        const subtasks = await Subtask.find({ cardId: card._id });
        cardsWithSubtasks.push({ ...card.toObject(), subtasks });
      }

      cards.push(...cardsWithSubtasks);
    }

    // Combine the results and send the response
    const result = { ...board.toObject(), lists, cards };
    res.send(result);
  } catch (error) {
    res.sendStatus(500); // Handle errors appropriately
  }
};

// Create board on POST
exports.create_board_post = [
  // Validate form fields
  body("boardTitle", "Title must not be empty.").isLength({ min: 1, max: 64 }),

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send({ error: errors.array({ onlyFirstError: true })[0].msg });
    }

    // Save new board to db
    try {
      const board = await Board.create({
        creatorId: req.user.id,
        boardTitle: req.body.boardTitle,
      });

      res.send(board);
    } catch (error) {
      res.send({ errorMsg: error });
    }
  },
];

// Handle board delete on DELETE
exports.board_delete = async (req, res) => {
  try {
    const boardId = req.params.id;

    const deletedBoard = await Board.findOneAndDelete({
      _id: boardId,
      creatorId: req.user.id,
    });

    if (!deletedBoard) {
      return res.sendStatus(404);
    }

    await List.deleteMany({ boardId });
    await Card.deleteMany({ boardId });
    await Subtask.deleteMany({ boardId });

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
};

// Handle board upadate on PATCH
exports.update_board_patch = [
  // Validate form fields
  body("boardTitle", "Title must not be empty.").isLength({ min: 1, max: 64 }),

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send({ error: errors.array({ onlyFirstError: true })[0].msg });
    }

    // Save updated board to db
    try {
      const boardId = req.params.id;
      const updatedBoard = await Board.findOneAndUpdate(
        { _id: boardId, creatorId: req.user.id },
        {
          boardTitle: req.body.boardTitle,
        },
        {
          new: true,
        }
      );

      if (!updatedBoard) {
        return res.sendStatus(404);
      }

      res.send(updatedBoard);
    } catch (error) {
      res.send({ errorMsg: error });
    }
  },
];

exports.inviteCollaborators = async (req, res) => {
  try {
    const boardId = Types.ObjectId(req.params.boardId);
    const userId = req.body.userId;
    console.log(boardId);
    const board = await Board.findById(boardId);
    //console.log(board);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    console.log(board);

    // get invited user boards :
    const invited_user_boards = await Board.find({
      creatorId: userId,
    }).populate("collaborators.userId");

    // check if the board already exists in the invited user boards :
    const existingBoard = invited_user_boards.find(
      (_board) => _board._id === boardId
    );
    if (existingBoard)
      return res.status(400).json({ error: "user is already a colaborator!" });
    invited_user_boards.push(board);
    board.collaborators.push({ _id: userId });
    await board.save();
    for (const invitedBoard of invited_user_boards) {
      await invitedBoard.save();
    }
    res.status(201).json(invited_user_boards);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.error(error);
  }
};

//remove collaborators from the board
exports.removeCollaborator = async (req, res) => {
  try {
    const { boardId, collaboratorId } = req.params;
    const board = await Board.findById(boardId);
    board.collaborators = board.filter(
      (collaborator) => collaborator.userId.toString() !== collaboratorId
    );
    await board.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
