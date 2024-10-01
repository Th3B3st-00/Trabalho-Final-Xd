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
  `nome_aluno` text NOT NULL,
  `data_nasc` date DEFAULT NULL,
  `email` text DEFAULT NULL,
  `senha` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_aluno`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela sistemabd.alunos: ~5 rows (aproximadamente)
DELETE FROM `alunos`;
INSERT INTO `alunos` (`id_aluno`, `nome_aluno`, `data_nasc`, `email`, `senha`) VALUES
	(1, 'aluno', '2000-12-07', 'batata@gmail.com', '0'),
	(9, 'teste', '2011-01-12', 'teste', '0'),
	(68, 'batata', '2001-02-01', 'dsfssdfg', '0'),
	(69, 'ghdgfh', '0000-00-00', 'ghdgfh', 'ghdgfh'),
	(70, 'batata', '2000-12-12', 'baba', '123');

-- Copiando estrutura para tabela sistemabd.professores
CREATE TABLE IF NOT EXISTS `professores` (
  `id_professor` int(11) NOT NULL AUTO_INCREMENT,
  `nome_professor` varchar(100) NOT NULL,
  `data_nasc` date DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `senha` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_professor`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela sistemabd.professores: ~17 rows (aproximadamente)
DELETE FROM `professores`;
INSERT INTO `professores` (`id_professor`, `nome_professor`, `data_nasc`, `email`, `senha`) VALUES
	(1, 'professor', '2000-12-12', 'batata2@gmail.com', '0'),
	(16, 'a', '1970-01-01', 'batata@gmail.com', '123'),
	(20, '1', '1970-01-01', '1', '1'),
	(21, 'a', '1970-01-01', 'a', '0'),
	(30, 'as', '1970-01-01', 'a', '0'),
	(35, 'creusa', '2000-11-10', 'sdyhfa', '0'),
	(37, 'creudete', '2222-12-12', 'sdyhfa', '0'),
	(38, 'teste', '2000-12-12', 'teste', '0'),
	(44, '', '0000-00-00', '', '0'),
	(79, 'batata', '2000-12-12', 'batata', '0'),
	(87, 'batata', '2000-12-12', 'baba', '123'),
	(89, 'batata', '2000-12-12', 'baba', '1234'),
	(93, 'a', '2000-12-12', 'ad', '0'),
	(107, 'aluno', '2000-12-12', 'aluno', '123'),
	(108, 'batata', '2000-12-12', 'baba', '123'),
	(109, 'a', '2000-12-12', 'a', '123'),
	(110, 'batata', '2000-12-12', 'baba', '123');

-- Copiando estrutura para tabela sistemabd.turmas
CREATE TABLE IF NOT EXISTS `turmas` (
  `id_turma` int(11) NOT NULL AUTO_INCREMENT,
  `materias` text NOT NULL,
  `provas` text NOT NULL,
  PRIMARY KEY (`id_turma`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela sistemabd.turmas: ~3 rows (aproximadamente)
DELETE FROM `turmas`;
INSERT INTO `turmas` (`id_turma`, `materias`, `provas`) VALUES
	(6, 'matemática', 'legal'),
	(7, 'matemática', 'legal'),
	(8, 'historia', 'batata');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
