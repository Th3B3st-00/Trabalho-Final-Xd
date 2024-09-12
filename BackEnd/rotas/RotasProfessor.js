const express = require('express');
const router = express.Router();
const ProfessorController = require('../controlador/ControladorProfessor');

// Rota para criar um novo produto
router.post('/professor', ProfessorController.createProfessor);

// Rota para obter todos os professor
router.get('/professor', ProfessorController.getAllProfessores);

// Rota para obter um aluno pelo ID
router.get('/professor/:id', ProfessorController.getProfessorById);

// Rota para atualizar um aluno
router.put('/professor/:id', ProfessorController.updateProfessor);

// Rota para deletar um aluno
router.delete('/professor/:id', ProfessorController.deleteProfessor);

router.post('/professor/login', ProfessorController.login)

module.exports = router;