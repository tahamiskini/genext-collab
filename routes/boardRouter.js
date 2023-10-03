const router = require("express").Router();

const boardController = require("../controllers/boardController");

router.get("/b/:id", boardController.board_get);

router.get("/:userId/boards", boardController.get_user_boards);

router.post("/b/", boardController.create_board_post);

router.patch("/b/:id/", boardController.update_board_patch);

router.delete("/b/:id/", boardController.board_delete);

module.exports = router;
