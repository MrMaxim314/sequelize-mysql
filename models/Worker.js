const Sequelize = require('sequelize');

const sequelize = require('../db');

const Worker = sequelize.define('worker', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    hired: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    salary: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Worker;