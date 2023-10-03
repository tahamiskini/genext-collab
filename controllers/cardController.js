const Card = require("../models/card");
const { body, validationResult } = require("express-validator");

// HANDLE current card GET
exports.card_get = async (req, res) => {
  res.send("HANDLE current card GET ");
};

// HANDLE create card POST
exports.create_card_post = async (req, res) => {
  res.send("HANDLE create card POST");
};

// Handle card update on PUT
exports.update_card_put = async (req, res) => {
  res.send("handle card update");
};

//Handle card delete on delete
exports.card_delete = async (req, res) => {
  res.send("handle card delete ");
};
