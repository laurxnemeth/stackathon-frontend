const Sequelize = require('sequelize');

//const db = new Sequelize('postgres://localhost:5432/stackathon');

const db = new Sequelize('postgres://postgres:test@db:5432/stackathon');

module.exports = db;
