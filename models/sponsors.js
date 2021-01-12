module.exports = function(sequelize, DataTypes) {
    const Sponsor = sequelize.define("Sponsor", {
        sponsor: {
            type: DataTypes.STRING,
        }
    })

    return Sponsor
}