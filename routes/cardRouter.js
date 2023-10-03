const router = require("express").Router();
const cardController = require("../../controllers/cardController");
const subtaskController = require("../../controllers/subTaskController");

router.get("/1/cards/:id", cardController.card_get);

router.post("/1/cards/", cardController.create_card_post);

router.put("/1/cards/:id", cardController.update_card_put);

router.delete("/1/cards/:id", cardController.card_delete);

// Card checklist api routes

router.post("/1/cards/:id/checklist", subtaskController.create_subtask_post);

router.put(
  "/1/cards/:id/checklist/:idSubtask",
  subtaskController.edit_subtask_put
);

router.delete(
  "/1/cards/:id/checklist/:idSubtask",
  subtaskController.subtask_delete
);

module.exports = router;
