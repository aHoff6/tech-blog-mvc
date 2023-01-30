const { User } = require('../models');

const userData = [
    {
        username: "josh32",
        email: "josh32@test.com",
        password: "password"
    },
    {
        username: "anth",
        email: "anth@test.com",
        password: "password"
    },
    {
        username: "tommy2",
        email: "tommy2@test.com",
        password: "password"
    },
    {
        username: "janelleo",
        email: "janelleo@test.com",
        password: "password"
    },
    {
        username: "nehag",
        email: "nehag@test.com",
        password: "password"
    },
    {
        username: "chip",
        email: "chip@test.com",
        password: "password"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;