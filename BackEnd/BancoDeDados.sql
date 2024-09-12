-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para sistemabd
CREATE DATABASE IF NOT EXISTS `sistemabd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `sistemabd`;

-- Copiando estrutura para tabela sistemabd.alunos
CREATE TABLE IF NOT EXISTS `alunos` (
  `id_aluno` int(11) NOT NULL AUTO_INCREMENT,
  `nome_aluno` varchar(100) NOT NULL,
  `cpf` varchar(50) NOT NULL DEFAULT '0',
  `data_nasc` date NOT NULL,
  `email` text DEFAULT NULL,
  `telefone` varchar(50) DEFAULT NULL,
  `endereco` text NOT NULL,
  PRIMARY KEY (`id_aluno`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela sistemabd.alunos: ~0 rows (aproximadamente)
INSERT INTO `alunos` (`id_aluno`, `nome_aluno`, `cpf`, `data_nasc`, `email`, `telefone`, `endereco`) VALUES
	(1, 'aluno', '2147483647', '2000-12-07', 'batata@gmail.com', '47991036736', 'rua x');

-- Copiando estrutura para tabela sistemabd.professores
CREATE TABLE IF NOT EXISTS `professores` (
  `id_professor` int(11) NOT NULL AUTO_INCREMENT,
  `nome_professor` varchar(100) NOT NULL,
  `cpf` varchar(50) NOT NULL DEFAULT '',
  `data_nasc` date NOT NULL,
  `email` text DEFAULT NULL,
  `telefone` varchar(50) DEFAULT NULL,
  `endereco` text DEFAULT NULL,
  PRIMARY KEY (`id_professor`) USING BTREE,
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela sistemabd.professores: ~0 rows (aproximadamente)
INSERT INTO `professores` (`id_professor`, `nome_professor`, `cpf`, `data_nasc`, `email`, `telefone`, `endereco`) VALUES
	(1, 'professor', '2147483647', '2000-12-12', 'batata2@gmail.com', '12345678910', 'rua batata');

-- Copiando estrutura para tabela sistemabd.turmas
CREATE TABLE IF NOT EXISTS `turmas` (
  `id_turma` int(11) NOT NULL AUTO_INCREMENT,
  `materias` text NOT NULL,
  `provas` text NOT NULL,
  PRIMARY KEY (`id_turma`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela sistemabd.turmas: ~2 rows (aproximadamente)
INSERT INTO `turmas` (`id_turma`, `materias`, `provas`) VALUES
	(6, 'matemática', 'legal'),
	(7, 'matemática', 'legal'),
	(8, 'historia', 'batata');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
