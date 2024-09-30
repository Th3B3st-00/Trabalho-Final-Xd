const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Professor extends Model {}

Professor.init({
    id_professor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_professor: {
        type: DataTypes.STRING
    },
    data_nasc: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'professores',
    timestamps: false
});

module.exports = Professor;