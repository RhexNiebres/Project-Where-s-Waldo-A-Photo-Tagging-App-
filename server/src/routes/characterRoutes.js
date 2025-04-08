const express = require("express");
const router = express.Router();
const characterController = require("../controllers/characterController");


router.get("/:characterId", characterController.validateCharacter);
router.get("/", characterController.getAllCharacters);

module.exports = router;