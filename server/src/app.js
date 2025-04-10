require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRoutes");
const playerRouter = require("./routes/playersRoutes");
const characterRouter = require("./routes/charactersRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/players", playerRouter);
app.use("/characters", characterRouter);
app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
