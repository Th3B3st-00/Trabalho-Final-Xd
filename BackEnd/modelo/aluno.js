const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Aluno extends Model {}

Aluno.init({
    id_aluno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_aluno: {
        type: DataTypes.TEXT
    },
    data_nasc: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.TEXT
    },
    senha: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'alunos',
    timestamps: false
});

module.exports = Aluno;