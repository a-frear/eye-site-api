const express = require("express");
const VideosService = require("./videosService");
const videosRouter = express.Router();

const serializeVideo = (video) => ({
  id: video.id,
  title: video.title,
  author: video.author,
  url: video.url,
  eye: video.eye,
  pink_eye: video.pink_eye,
});

videosRouter.route("/").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  VideosService.getAllVideos(knexInstance)
    .then((vid) => {
      res.json(vid.map(serializeVideo));
    })
    .catch(next);
});

module.exports = videosRouter;
