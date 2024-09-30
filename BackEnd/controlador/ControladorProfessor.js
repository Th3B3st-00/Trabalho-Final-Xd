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
            const email = req.body.email
            const senha = req.body.senha
            const professor = await Professor.findOne({
                where: {
                    email: email // Usa o e-mail que veio do frontend
                }
            });
            if(!professor){
                res.status(404).send('Nenhum aluno encontrado')
            }

            if(email == professor.email && senha == professor.senha){
                res.json(professor)
                console.log('Deu certo')
            } else {
                res.status(400).send(';-;')
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = ControladorProfessor;