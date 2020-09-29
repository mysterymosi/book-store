const express        = require("express"),
      authorController = require("../controllers/authorController"),
      router         = express.Router();

router.get("/", authorController.author_index);
router.post("/", authorController.author_create_post);
router.get("/:id", authorController.author_details);
router.delete("/:id", authorController.author_delete);

module.exports = router;