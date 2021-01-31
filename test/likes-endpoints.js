const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { makeVideosArray } = require('./videos.fixtures')
const { makeLikesArray } = require('./likes.fixtures')



describe('Likes Endpoints', function() {
    let db

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('clean the table', () => db.raw('TRUNCATE likes, videos RESTART IDENTITY CASCADE'))

  afterEach('cleanup', () => db.raw('TRUNCATE likes, videos RESTART IDENTITY CASCADE'))

  describe(`GET /likes`, () => {
    context('Given there are no likes in the database', () => {
        it(`responds with 200 and an empty list`, () => {
            return supertest(app)
                .get('/api/likes')
                .expect(200, [])
        })
    })
    context('Given there are likes in the database', () => {
        const testVideos = makeVideosArray()
        const testLikes = makeLikesArray()
   
        beforeEach('insert likes', () => {
            return db
                .into('videos')
                .insert(testVideos)
                .then(() => {
                    return db
                    .into('likes')
                    .insert(testLikes)
                })
        })
        it('GET /comments responds with 200 and all of the likes', () => {
            return supertest(app)
                .get('/api/likes')
                .expect(200, testLikes)
        })
    })
  })
})