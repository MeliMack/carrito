module.exports = function (sequelize, dataTypes) {
    let alias = "ProductosVentas";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: dataTypes.FLOAT.UNSIGNED,
            allowNull: false,
        },
        usuario_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tableName: 'ventas',
        timestamps: false
    }

    let Venta = sequelize.define(alias, cols, config);
    return Venta
}