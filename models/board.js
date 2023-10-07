const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema(
  {
    creatorId: { type: Schema.Types.ObjectId, ref: "Account", required: true },
    boardTitle: { type: String, required: true },
    collaborators: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
        role: { type: String, default: "collaborator" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

BoardSchema.virtual("url").get(() => {
  return `/b/${this._id}`;
});

module.exports = mongoose.model("Board", BoardSchema);
