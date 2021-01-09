module.exports = function (sequelize, dataTypes) {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
			primaryKey: true,
			autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        }
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config);
    return User
}