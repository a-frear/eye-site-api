const VideosService = {
    getAllVideos(knex){
        return knex.select('*').from('videos')
    },
    getById(knex, id) {
        return knex.from('videos').select('*').where('id', id).first()
    }
}

module.exports = VideosService