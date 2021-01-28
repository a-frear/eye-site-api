const express = require('express')
const xss = require('xss')
const CommentsService = require('./commentsService')
//const { requiresAuth } = require('express-openid-connect');
const commentsRouter = express.Router()
const jsonParser = express.json()

const serializeComment = comment => ({
    id: comment.id,
    video_id: comment.video_id,
    user_id: comment.user_id,
    content: xss(comment.content),
    modified: comment.modified
  })

commentsRouter
.route('/')
.get((req, res, next) => {
    const knexInstance = req.app.get('db')
    CommentsService.getAllComments(knexInstance)
        .then(comments => {
          res.json(comments.map(serializeComment))
        })
        .catch(next)
        //passing next into the .catch from the promise chain so that any errors get handled by our error handler middleware.
  })

  .post(jsonParser, /*requiresAuth(),*/ (req, res, next) => {
    const { video_id, user_id, content } = req.body
    const newComment = { video_id, user_id, content }

    for (const [key, value] of Object.entries(newComment))
    if (value == null)
      return res.status(400).json({
        error: { message: `Missing '${key}' in request body` }
      })

    CommentsService.insertComment(
      req.app.get('db'),
      newComment
    )
      .then(comment => {
        res
          .status(201)
          .location(`/api/comments/${comment.id}`)
          .json(serializeComment(comment))
      })
      .catch(next)
  })

  module.exports = commentsRouter