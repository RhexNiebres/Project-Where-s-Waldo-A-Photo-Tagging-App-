const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/charactersController");


router.get("/:characterId", charactersController.validateCharacter);
router.get("/", charactersController.getAllCharacters);

module.exports = router;