const express = require('express');
const router = express.Router();
const AlunoController = require('../controlador/ControladorAluno');

// Rota para criar um novo produto
router.post('/alunos', AlunoController.createAluno);

// Rota para obter todos os alunos
router.get('/alunos', AlunoController.getAllAlunos);

// Rota para obter um aluno pelo ID
router.get('/alunos/:id', AlunoController.getAlunoById);

// Rota para atualizar um aluno
router.put('/alunos/:id', AlunoController.updateAluno);

// Rota para deletar um aluno
router.delete('/alunos/:id', AlunoController.deleteAluno);

router.post('/aluno/login', AlunoController.login)

module.exports = router;