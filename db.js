//IN WORKING!!! NEED CONFIG>JS

/*const config = require('./config.js')
const { Sequelize } = require('sequelize')

const { host, username, password, database, port, logging, dialect } =
    config.env === 'development' ? config.development : config.production

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
    dialectOptions: {
        typeCast: function (field, next) {
            if (field.type === 'DATETIME') {
                return field.string()
            }
            return next()
        },
    },
    port: parseInt(port),
    logging,
    // timezone,
})

const db = {
    host,
    username,
    password,
    database,
    port,
}

module.exports = { db, sequelize }*/
