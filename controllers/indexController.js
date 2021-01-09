const db = require('../database/models');

module.exports = {
    index: (req, res) => {
        db.Producto.findAll()
        .then(function(resultados) {
            res.render('index', {
                productos: resultados
            })
        })
    }
}