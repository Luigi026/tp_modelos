module.exports = (sequelize, dataTypes) => {

    const alias = "Movie";
    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,   //Con esto ya tenemos configurada la restriccion a las contrain de la columna ID
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        title : {
            type : dataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0
        },
        release_date : {
            type : dataTypes.DATE,
            allowNull : false
        },
        length : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    }
    const config = {
        tableName : "movies",
        timestamps : true,  // Si no tiene marcas de tiempo debed de ir en false 
        underscored : true   //sequelize solo permite camelcase, en este caso se le avisa que esta hecho con guion bajo
    }
    const Movie = sequelize.define(alias, cols, config)
    return Movie
}