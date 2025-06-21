require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRoutes");
const playerRouter = require("./routes/playersRoutes");
const characterRouter = require("./routes/charactersRoutes");
const cors = require("cors");

app.use(cors({
  origin: process.env.GAME_CLIENT_HOST, //Netlify URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/players", playerRouter);
app.use("/characters", characterRouter);

app.get("/ping", (req, res) => {
  res.status(200).send("OK");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
