require("dotenv").config();
const express = require("express");
const app = express();
const playerRouter = require("./routes/playersRoutes");
const characterRouter = require("./routes/charactersRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/players", playerRouter);
app.use("/characters", characterRouter);
app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
