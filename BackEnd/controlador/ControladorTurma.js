const Turma = require('../modelo/turma');

const ControladorTurma = {
    createTurma: async (req, res) => {
        try {
            const novaTurma = await Turma.create(req.body);
            res.json(novaTurma);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllTurmas: async (req, res) => {
        try {
            const turma = await Turma.findAll();
            res.json(turma);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getTurmaById: async (req, res) => {
        try {
            const turma = await Turma.findByPk(req.params.id);
            if (!turma) {
                return res.status(404).send('Turma não encontrado');
            }
            res.json(turma);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateTurma: async (req, res) => {
        try {
            const turma = await Turma.findByPk(req.params.id);
            if (!turma) {
                return res.status(404).send('Turma não encontrado');
            }
            await turma.update(req.body);
            res.send('Turma atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteTurma: async (req, res) => {
        try {
            const turma = await Turma.findByPk(req.params.id);
            if (!turma) {
                return res.status(404).send('Turma não encontrado');
            }
            await turma.destroy();
            res.send('Turma deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    login: async (req, res) => {
        try {
            const turma = await turma.findByPk(req.params.id);
            if (turma.email == req.body.email && turma.senha == req.body.senha) {
                return res.status(200).send('Turma logado com sucesso');
            } else {
                res.send('E-mail ou senha incorretos');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = ControladorTurma;