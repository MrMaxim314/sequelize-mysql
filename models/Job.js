const Sequelize = require('sequelize');

const sequelize = require('../db');

const Job = sequelize.define('job', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date_hired: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    salary_per_hour: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    worker_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'workers',
            key: 'id'
        }
    }
}, {
    timestamps: false
});

module.exports = Job;