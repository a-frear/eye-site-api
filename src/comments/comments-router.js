const express = require('express')
const xss = require('xss')
const CommentsService = require('./commentsService')
const commentsRouter = express.Router()
const jsonParser = express.json()
const { checkJwt } = require("../authz/check-jwt");

const serializeComment = comment => ({
    id: comment.id,
    video_id: comment.video_id,
    user_name: comment.user_name,
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
  })

  .post(jsonParser, checkJwt, (req, res, next) => {
    const { video_id, user_name, content } = req.body
    const newComment = { video_id, user_name, content }

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

  commentsRouter
      .route('/:comment_id')
      .all((req, res, next) => {
        CommentsService.getById(
            req.app.get('db'), 
            req.params.comment_id
            )
            .then(comment => {
              if(!comment){
                return res.status(404).json({
                  error: { message: `Comment does not exist`}
                })
              }
              res.comment = comment
              next()
            })
            .catch(next)
      })
      .get((req, res, next) => {
              res.json(serializeComment(res.comment))
            })

  module.exports = commentsRouter