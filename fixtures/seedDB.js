// script to seed data base
console.log("Seeding Database")
const seed = sequelize_fixtures.loadFile('./fixtures/seeds.json', models)
    .then(function(){
        console.log("Database seeded")
    });
