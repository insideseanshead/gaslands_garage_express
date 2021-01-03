module.exports = function(sequelize, DataTypes) {
    const Weapon = sequelize.define("Weapon", {
        Weapon_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        range: {
            type: DataTypes.STRING,
            allowNull: false
        },
        attack_die: {
            type: DataTypes.STRING,
        },
        special_rules: {
            type: DataTypes.STRING,
        },
        build_slots: {
            type: DataTypes.INTEGER,
        },
        cost: {
            type: DataTypes.INTEGER,
        }
    })

    return Weapon;
}