const Sequelize = require('sequelize');

//const db = new Sequelize('postgres://localhost:5432/stackathon');
const dbUser = process.env.DB_USER || "postgres";
const dbPassword = process.env.DB_PASS || "test";
const dbName = process.env.DB_NAME || "stackathon";

const db = new Sequelize(`postgres://${dbUser}:${dbPassword}@db:5432/${dbName}`);

module.exports = db;
