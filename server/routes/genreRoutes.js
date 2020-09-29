const express        = require("express"),
      genreController = require("../controllers/genreController"),
      router         = express.Router();

router.get("/", genreController.genre_index);
router.post("/", genreController.genre_create_post);
router.get("/:id", genreController.genre_details);
router.delete("/:id", genreController.genre_delete);

module.exports = router;