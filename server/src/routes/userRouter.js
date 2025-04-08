import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const playerRouter = Router();
const prisma = new PrismaClient();

playerRouter.get("/", async (req, res) => {
  try {
    const players = await prisma.player.findMany({
      orderBy: {
        time: "asc", //sort low to high
      },
    });

    if (!players || players.length === 0) {
      return res.status(404).json({ success: false, message: "No players found." });
    }

    res.status(200).json({ success: true, players });
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});


export default playerRouter;