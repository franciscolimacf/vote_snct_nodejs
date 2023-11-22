const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const endpoints = require("./routes/endpoints");

const app = express();
const port = 8000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/turma", endpoints);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
