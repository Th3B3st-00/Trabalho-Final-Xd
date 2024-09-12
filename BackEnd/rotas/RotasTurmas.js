const express = require('express');
const router = express.Router();
const TurmaController = require('../controlador/ControladorTurma');

// Rota para criar um novo produto
router.post('/turmas', TurmaController.createTurma);

// Rota para obter todos os turmas
router.get('/turmas', TurmaController.getAllTurmas);

// Rota para obter um aluno pelo ID
router.get('/turmas/:id', TurmaController.getTurmaById);

// Rota para atualizar um aluno
router.put('/turmas/:id', TurmaController.updateTurma);

// Rota para deletar um aluno
router.delete('/turmas/:id', TurmaController.deleteTurma);

router.post('/turmas/login', TurmaController.login)

module.exports = router;