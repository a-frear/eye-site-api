const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { makeVideosArray } = require('./videos.fixtures')

describe('Videos Endpoints', function() {
    let db

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('clean the table', () => db.raw('TRUNCATE videos RESTART IDENTITY CASCADE'))

  afterEach('cleanup', () => db.raw('TRUNCATE videos RESTART IDENTITY CASCADE'))

  describe(`GET /api/videos`, () => {

    context('Given there are no videos in the database', () => {
        it(`responds with 200 and an empty list`, () => {
            return supertest(app)
                .get('/api/videos')
                .expect(200, [])
        })
    })
    context('Given there are videos in the database', () => {
        const testVideos = makeVideosArray()
   
        beforeEach('insert videos', () => {
            return db
                .into('videos')
                .insert(testVideos)
                })

        it('GET /videos responds with 200 and all of the videos', () => {
            return supertest(app)
                .get('/api/videos')
                .expect(200, testVideos)
        })
    })
  })
})