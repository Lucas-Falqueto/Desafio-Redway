require('dotenv').config()
require('reflect-metadata');
const { DataSource } = require('typeorm')
const User = require('../entity/UserEntity');
const AppDataSource = new DataSource({
    type: "mysql",
    host: "db",
    port: "3306",
    username: "root",
    password: "root",
    database: "desafio",
    synchronize: true,
    logging: true,
    entities: [User],
    dropSchema: [User]
})

module.exports = AppDataSource;