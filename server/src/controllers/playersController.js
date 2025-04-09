const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getPlayers = async (req, res) => {
  try {
    const players = await prisma.player.findMany({
      orderBy: {
        time: "asc", // Sort low to high
      },
    });

    if (players.length === 0) {
      return res.status(404).json({ success: false, message: "No players found." });
    }

    res.status(200).json({ success: true, players });
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

exports.createPlayers = async (req, res) => {
  try {
    const { username, time } = req.body;

    // basic validation
    if (!username || typeof username !== "string" || username.trim().length === 0) {
      return res.status(400).json({ success: false, message: "Valid username is required." });
    }
    if (!time || typeof time !== "number" || isNaN(time)) {
      return res.status(400).json({ success: false, message: "Valid time is required." });
    }

    const newPlayer = await prisma.player.create({
      data: {
        username,
        time,
      },
    });

    res.status(201).json({ success: true, player: newPlayer });
  } catch (error) {
    console.error("Error saving player:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
