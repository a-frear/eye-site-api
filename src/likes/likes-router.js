const express = require("express");
const LikesService = require("./likesService");
const likesRouter = express.Router();
const jsonParser = express.json();
const { checkJwt } = require("../authz/check-jwt");

const serializeLikes = (like) => ({
  id: like.id,
  video_id: like.video_id,
  user_name: like.user_name,
});

likesRouter
  .route("/")
  .get((req, res, next) => {
    const knexInstance = req.app.get("db");
    LikesService.getAllLikes(knexInstance)
      .then((likes) => {
        res.json(likes.map(serializeLikes));
      })
      .catch(next);
  })

  .post(jsonParser, checkJwt, (req, res, next) => {
    const { video_id, user_name } = req.body;
    const newLike = { video_id, user_name };

    LikesService.addLike(req.app.get("db"), newLike)
      .then((like) => {
        res
          .status(201)
          .location(`/api/likes/${like.id}`)
          .json(serializeLikes(like));
      })
      .catch(next);
  });

module.exports = likesRouter;
