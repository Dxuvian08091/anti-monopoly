require("dotenv").config();
const express = require("express");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(process.cwd(), "dist")));

app.get("/", (req, res) => {
  return res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});

app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  //ngrok http --domain=cosmic-popular-wolf.ngrok-free.app 3000
});
