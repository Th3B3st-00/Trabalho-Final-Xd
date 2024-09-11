const express = require('express');
const app = express();
const cors = require('cors')

const db = require('./config/database')

// Testar comunicação com DB
db.authenticate()
.then(() => console.log('Autenticado com sucesso!'))
.catch(() => console.log('Deu problema conectando com o banco'))

app.use(express.json());
app.use(cors())

//------------------- Aluno ---------------------
const alunosRoutes = require('./rotas/RotasAluno');

// Usar rotas
app.use(alunosRoutes);


//------------------- Professor ---------------------
const professorRoutes = require('./rotas/RotasProfessor');

// Usar rotas
app.use(professorRoutes);


//------------------- Turma ---------------------
const turmaRoutes = require('./rotas/RotasTurmas');

// Usar rotas
app.use(turmaRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
