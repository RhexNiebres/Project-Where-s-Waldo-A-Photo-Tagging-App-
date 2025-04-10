require("dotenv").config();
const express = require("express");
const app = express();
const playerRouter = require("./routes/playersRoutes");
const characterRouter = require("./routes/charactersRoutes");
const indexRouter = require("./routes/indexRoutes");
const cors = require("cors");

app.use(cors({ origin: "*",}));
app.options("*", cors());

app.use(express.json());
app.use("/players", playerRouter);
app.use("/characters", characterRouter);
app.use("/", indexRouter);
app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
