const Professor = require('../modelo/professor');

const ControladorProfessor = {
    createProfessor: async (req, res) => {
        try {
            const novoProfessor = await Professor.create(req.body);
            res.json(novoProfessor);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllProfessores: async (req, res) => {
        try {
            const professor = await Professor.findAll();
            res.json(professor);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getProfessorById: async (req, res) => {
        try {
            const professor = await Professor.findByPk(req.params.id);
            if (!professor) {
                return res.status(404).send('Professor não encontrado');
            }
            res.json(professor);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateProfessor: async (req, res) => {
        try {
            const professor = await Professor.findByPk(req.params.id);
            if (!professor) {
                return res.status(404).send('Professor não encontrado');
            }
            await professor.update(req.body);
            res.send('Professor atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteProfessor: async (req, res) => {
        try {
            const professor = await Professor.findByPk(req.params.id);
            if (!professor) {
                return res.status(404).send('Professor não encontrado');
            }
            await professor.destroy();
            res.send('Professor deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    login: async (req, res) => {
        try {
            const professor = await professor.findByPk(req.params.id);
            if (professor.email == req.body.email && professor.senha == req.body.senha) {
                return res.status(200).send('Professor logado com sucesso');
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

module.exports = ControladorProfessor;