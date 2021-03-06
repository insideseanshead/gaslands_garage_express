module.exports = function(sequelize, DataTypes) {
    const Vehicle = sequelize.define("Vehicle", {
        vehicle_type: {
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
        handling: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        max_gear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        crew: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        build_slots: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        special_rules: {
            type: DataTypes.STRING
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Vehicle;
}