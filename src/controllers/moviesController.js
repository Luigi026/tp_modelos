const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        return res.render('moviesList', {
            movies : []
        })
    }
}