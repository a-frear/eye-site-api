require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const videosRouter = require("./videos/videos-router");
const commentsRouter = require("./comments/comments-router");
const likesRouter = require("./likes/likes-router");

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(
  cors({
    origin: "https://eyesite.club",
  })
);
app.options("*", cors());

app.use("/images", express.static("images"));

app.use("/api/videos", videosRouter);

app.use("/api/comments", commentsRouter);

app.use("/api/likes", likesRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use((error, req, res, next) => {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    response = { error };
  }
  res.status(500).json(response);
});

module.exports = app;
