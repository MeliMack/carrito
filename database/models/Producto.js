module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
			primaryKey: true,
			autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false            
        },
        precio: {
            type: dataTypes.FLOAT.UNSIGNED,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(300),
            allowNull: false
        }
    }
    let config = {
        tableName: 'productos',
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);
    return Producto
}