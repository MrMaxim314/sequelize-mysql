const Sequelize = require('sequelize');

const db = new Sequelize(
    'nodeseq',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

db.sync();

module.exports = db;