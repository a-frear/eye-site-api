const express = require('express')
const LikesService = require('./likesService')
const { requiresAuth } = require('express-openid-connect');
const likesRouter = express.Router()
const jsonParser = express.json()

const serializeLikes = like => ({
    id: like.id,
    video_id: like.video_id
  })

likesRouter
.route('/')
.get((req, res, next) => {
    const knexInstance = req.app.get('db')
    LikesService.getAllLikes(knexInstance)
        .then(likes => {
          res.json(likes.map(serializeLikes))
        })
        .catch(next)
        //passing next into the .catch from the promise chain so that any errors get handled by our error handler middleware.
  })

  .post(jsonParser, /*requiresAuth(),*/ (req, res, next) => {
    const { video_id } = req.body
    const newLike = { video_id }

    LikesService.addLike(
      req.app.get('db'),
      newLike
    )
      .then(like => {
        res
          .status(201)
          .location(`/api/likes/${like.id}`)
          .json(serializeLikes(like))
      })
      .catch(next)
  })

  module.exports = likesRouter