module.exports = (sequelize, dataTypes) => {

    const alias = "Genre";
    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,   //Con esto ya tenemos configurada la restriccion a las contrain de la columna ID
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : dataTypes.INTEGER(3,1).UNSIGNED,
            allowNull : false,
            unique : true
        },
        active : {
            type : dataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : 1
        }
    }
    const config = {
        tableName : "Genres",
        timestamps : true,  
        underscored : true   
    }
    const Genre = sequelize.define(alias, cols, config)
    return Genre
}