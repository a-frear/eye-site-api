const LikesService = {
  getAllLikes(knex) {
    return knex.select("*").from("likes");
  },
  addLike(knex, newLike) {
    return knex
      .insert(newLike)
      .into("likes")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
};

module.exports = LikesService;
