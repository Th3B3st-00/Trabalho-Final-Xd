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
            const aluno = await Alunos.findAll();
            res.json(aluno);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAlunoById: async (req, res) => {
        try {
            const produto = await Alunos.findByPk(req.params.id);
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
            const produto = await Alunos.findByPk(req.params.id);
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
            const produto = await Alunos.findByPk(req.params.id);
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
            const email = req.body.email
            const senha = req.body.senha
            const aluno = await Aluno.findOne({
                where: {
                    email: email // Usa o e-mail que veio do frontend
                }
            });
            if(!aluno){
                res.status(404).send('Nenhum aluno encontrado')
            }

            if(email == aluno.email && senha == aluno.senha){
                res.json(aluno)
                console.log('Deu certo')
            } else {
                res.status(400).send(';-;')
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = ControladorAluno;