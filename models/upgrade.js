module.exports = function(sequelize, DataTypes) {
    const Upgrade = sequelize.define("Upgrade", {
        upgrade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        special_rules: {
            type: DataTypes.STRING,
            allowNull: false
        },
        build_slots: {
            type: DataTypes.INTEGER
        },
        cost: {
            type: DataTypes.INTEGER,
        }
    })

    return Upgrade
}