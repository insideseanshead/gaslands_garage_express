module.exports = function(sequelize, DataTypes) {
    var Racer = sequelize.define("Racer", {
        racer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hull: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weapons: {
            type: DataTypes.STRING
        },
        special_rules: {
            type: DataTypes.STRING
        },
        gear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        handling: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        crew: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cans: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    })

    return Racer;
}