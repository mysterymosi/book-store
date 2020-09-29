const express        = require("express"),
      bookController = require("../controllers/bookController"),
      router         = express.Router();

router.get("/", bookController.book_index);
router.post("/", bookController.book_create_post);
router.get("/:id", bookController.book_details);
router.delete("/:id", bookController.book_delete);

module.exports = router;