const db = require('../database/models');

module.exports = {
    index: function(req, res) {
        db.Producto.findAll()
        .then(results => res.render('index', {productos: results}))
    }
}