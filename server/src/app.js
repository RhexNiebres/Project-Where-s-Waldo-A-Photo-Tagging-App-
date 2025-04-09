require("dotenv").config();
const express = require('express');
const app = express();
const playerRouter = require('./routes/playerRouter');
const  characterRouter = require("./routes/characterRoutes");
const cors = require('cors'); 

app.use(cors());
app.use(express.json());
app.use('/player', playerRouter);
app.use('/character', characterRouter)
app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});

