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
    cpf: {
        type: DataTypes.STRING
    },
    data_nasc: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.TEXT
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
    modelName: 'professores',
    timestamps: false
});

module.exports = Professor;