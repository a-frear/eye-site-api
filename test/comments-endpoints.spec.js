const { expect } = require("chai");
const knex = require("knex");
const supertest = require("supertest");
const app = require("../src/app");
const {
  makeCommentsArray,
  makeMaliciousComment,
  authToken,
} = require("./comments.fixtures");
const { makeVideosArray } = require("./videos.fixtures");

describe("Comments Endpoints", function () {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("clean the table", () =>
    db.raw("TRUNCATE comments, videos RESTART IDENTITY CASCADE")
  );

  afterEach("cleanup", () =>
    db.raw("TRUNCATE comments, videos RESTART IDENTITY CASCADE")
  );

  describe(`GET /comments`, () => {
    context("Given there are no comments in the database", () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app).get("/api/comments").expect(200, []);
      });
    });
    context("Given there are comments in the database", () => {
      const testVideos = makeVideosArray();
      const testComments = makeCommentsArray();

      beforeEach("insert comments", () => {
        return db
          .into("videos")
          .insert(testVideos)
          .then(() => {
            return db.into("comments").insert(testComments);
          });
      });
      it("GET /comments responds with 200 and all of the comments", () => {
        return supertest(app).get("/api/comments").expect(200, testComments);
      });
    });
    context(`Given an XSS attack comment`, () => {
      const { maliciousComment, expectedComment } = makeMaliciousComment();
      const testVideos = makeVideosArray();

      beforeEach("insert malicious comment", () => {
        return db
          .into("videos")
          .insert(testVideos)
          .then(() => {
            return db.into("comments").insert([maliciousComment]);
          });
      });

      it("removes XSS attack content", () => {
        return supertest(app)
          .get(`/api/comments/${maliciousComment.id}`)
          .expect(200)
          .expect((res) => {
            expect(res.body.content).to.eql(expectedComment.content);
          });
      });
    });
  });

  describe(`POST /api/comments`, () => {
    const testVideos = makeVideosArray();

    beforeEach("insert videos", () => {
      return db.into("videos").insert(testVideos);
    });

    it(`creates a comment and responds with 201 and the new comment`, () => {
      this.retries(3);
      const newComment = {
        content: "Test new comment content...",
        user_name: "test_user_123",
        video_id: 1,
      };
      return (
        supertest(app)
          .post(`/api/comments`)
          .set("Authorization", "bearer " + authToken)
          .send(newComment)
           .expect(201)
          .expect((res) => {
            expect(res.body.content).to.eql(newComment.content);
            expect(res.body.video_id).to.eql(newComment.video_id);
            expect(res.body.user_name).to.eql(newComment.user_name);
            expect(res.body).to.have.property("id");
            expect(res.headers.location).to.eql(`/api/comments/${res.body.id}`);
            const expected = new Date().toLocaleString();
            const actual = new Date(res.body.modified).toLocaleString();
            expect(actual).to.eql(expected);
          })
          .then((postRes) =>
            supertest(app)
              .get(`/api/comments/${postRes.body.id}`)
              .expect(postRes.body)
          )
      );
    });

    it("removes XSS attack content from response", () => {
      const { maliciousComment, expectedComment } = makeMaliciousComment();
      return (
        supertest(app)
          .post(`/api/comments`)
          .set("Authorization", "bearer " + authToken)
          .send(maliciousComment)
             .expect(201)
          .expect((res) => {
            expect(res.body.content).to.eql(expectedComment.content);
          })
      );
    });
  });
});
