const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class turma extends Model {}

turma.init({
    id_turma: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    materias: {
        type: DataTypes.TEXT
    },
    provas: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'turmas',
    timestamps: false
});

module.exports = turma;