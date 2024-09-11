const Aluno = require('../modelo/aluno');

const ControladorAluno = {
    createAluno: async (req, res) => {
        try {
            const novoAluno = await Aluno.create(req.body);
            res.json(novoAluno);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllAlunos: async (req, res) => {
        try {
            const aluno = await Aluno.findAll();
            res.json(aluno);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAlunoById: async (req, res) => {
        try {
            const produto = await Aluno.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).send('Aluno não encontrado');
            }
            res.json(produto);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateAluno: async (req, res) => {
        try {
            const produto = await Aluno.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).send('Aluno não encontrado');
            }
            await produto.update(req.body);
            res.send('Aluno atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteAluno: async (req, res) => {
        try {
            const produto = await Aluno.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).send('Aluno não encontrado');
            }
            await produto.destroy();
            res.send('Aluno deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    login: async (req, res) => {
        try {
            const aluno = await aluno.findByPk(req.params.id);
            if (aluno.email == req.body.email && aluno.senha == req.body.senha) {
                return res.status(200).send('Aluno logado com sucesso');
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

module.exports = ControladorAluno;