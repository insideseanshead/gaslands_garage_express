module.exports = function(sequelize, DataTypes) {
    const Team = sequelize.define("Team", {
        team_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sponsor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cans_total: {
            type: DataTypes.INTEGER
        }
    })
}