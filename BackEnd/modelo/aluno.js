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
        type: DataTypes.STRING
    },
    data_nasc: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.TEXT
    },
    senha: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'alunos',
    timestamps: false
});

module.exports = Aluno;