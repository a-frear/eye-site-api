const CommentsService = {
    getAllComments(knex){
        return knex.select('*').from('comments')
    },
    insertComment(knex, newComment) {
        return knex
            .insert(newComment)
            .into('comments')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    }
}

module.exports = CommentsService