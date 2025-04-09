const express = require("express");
const router = express.Router();
const playersController = require("../controllers/playersController");

router.get("/", playersController.getPlayers);
router.post("/", playersController.createPlayers);

module.exports = router;
