require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {CLIENT_ORIGIN} = require('./config')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const videosRouter = require('./videos/videos-router')
const commentsRouter = require('./comments/comments-router')
const likesRouter = require('./likes/likes-router')
// const { auth, requiresAuth } = require('express-openid-connect')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';



app.use(morgan(morganOption))
app.use(helmet())
app.use(
  cors({
      origin: CLIENT_ORIGIN
  })
)
app.options('*', cors())


app.use('/images', express.static('images'))

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.AUTH0_CLIENT_SECRET,
//   baseURL: 'http://localhost:8000',
//   clientID: process.env.AUTH0_CLIENT_ID,
//   issuerBaseURL: 'https://dev-lukn5ug2.us.auth0.com'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));


// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });


app.use('/api/videos', videosRouter)

app.use('/api/comments', commentsRouter)

app.use('/api/likes', likesRouter)

app.get('/', (req,res) => {
    res.send('Hello, world!')
})

app.use((error, req, res, next) => {
    let response
    if (NODE_ENV === 'production') {
      response = { error: { message: 'server error' }}
    } else {
      response = { error }
    }
    res.status(500).json(response)
  })

module.exports = app