const router = require("express").Router();
const listController = require("../../controllers/listController");

router.get("/1/lists/:id", listController.list_get);

router.post(
  "/1/lists/",

  listController.create_list_post
);

router.put(
  "/1/lists/:id",

  listController.update_list_put
);

router.delete(
  "/1/lists/:id",

  listController.list_delete
);

module.exports = router;
