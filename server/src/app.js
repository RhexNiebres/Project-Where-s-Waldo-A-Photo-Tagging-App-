require("dotenv").config();
const express = require('express');
const app = express();

app.all('/', (req, res) => {});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});

