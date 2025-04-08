import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const characterRouter = Router();
const prisma = new PrismaClient();


characterRouter.get("/:characterId", async (req, res) => {
  try {
    const { x, y } = req.query; 
    const { characterId } = req.params;

    const character = await prisma.character.findUnique({
      where: {
        id: parseInt(characterId), 
      },
    });

    if (!character) {
      return res.status(404).json({ success: false, message: "Character not found." });
    }

    const tolerance = 5;

    const isSelected =
      parseFloat(x) >= character.x - tolerance &&
      parseFloat(x) <= character.x + tolerance &&
      parseFloat(y) >= character.y - tolerance &&
      parseFloat(y) <= character.y + tolerance;

    res.status(200).json({ success: isSelected });
  } catch (error) {
    console.error("Error validating character:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

characterRouter.get("/", async (req, res) => {
    try {
      const characters = await prisma.character.findMany();
  
      if (!characters || characters.length === 0) {
        return res.status(404).json({ success: false, message: "No characters found." });
      }
  
      res.status(200).json({ success: true, characters });
    } catch (error) {
      console.error("Error fetching characters:", error);
      res.status(500).json({ success: false, message: "Server error." });
    }
  });

export default characterRouter;