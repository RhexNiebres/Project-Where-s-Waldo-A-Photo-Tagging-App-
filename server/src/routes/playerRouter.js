import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const playerRouter = Router();
const prisma = new PrismaClient();

playerRouter.get("/players", async (req, res) => {
  try {
    const players = await prisma.player.findMany({
      orderBy: {
        time: "asc", //sort low to high
      },
    });

    if (!players || players.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No players found." });
    }

    res.status(200).json({ success: true, players });
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

playerRouter.post("/player", async (req, res) => {
  try {
    const { username, time } = req.body;

    if (!username || !time) {
      return res
        .status(400)
        .json({ success: false, message: "Username and time are required." });
    }

    const newPlayer = await prisma.player.create({
      data: {
        username,
        time,
      },
    });

    if (!newPlayer) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to save player." });
    }

    res.status(201).json({ success: true, player: newPlayer });
  } catch (error) {
    console.error("Error saving player:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

export default playerRouter;
