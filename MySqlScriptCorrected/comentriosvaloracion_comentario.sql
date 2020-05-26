-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: comentriosvaloracion
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `id_comentario` int NOT NULL AUTO_INCREMENT,
  `calificacion_calidad` int DEFAULT NULL,
  `calificacion_general` int DEFAULT NULL,
  `calificacion_precio` int DEFAULT NULL,
  `calificacion_servicio` int DEFAULT NULL,
  `calificacion_ubicacion` int DEFAULT NULL,
  `fecha_act` varchar(50) NOT NULL,
  `fechas_visita` varchar(50) DEFAULT NULL,
  `foto` tinyblob,
  `id_lugar_turistico` int NOT NULL,
  `id_usuario` int NOT NULL,
  `respuesta1` varchar(255) DEFAULT NULL,
  `respuesta2` varchar(255) DEFAULT NULL,
  `respuesta3` varchar(255) DEFAULT NULL,
  `respuesta4` varchar(255) DEFAULT NULL,
  `titulo_comentario` varchar(45) NOT NULL,
  `descrip_comentario` varchar(300) NOT NULL,
  PRIMARY KEY (`id_comentario`),
  UNIQUE KEY `id_comentario_UNIQUE` (`id_comentario`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (5,3,2,2,2,2,'2020-09-08','2019-12-31',NULL,1,1,'si','no','si','no','Hermoso Paisaje','otro mundo inigualable, perdido en el tiempo'),(4,3,4,2,3,4,'2020-09-08','2019-12-31',NULL,1,1,'si','no','si','no','Bienvenidos a un Mundo Maravilloso','la Joya de Cochabamba'),(6,5,5,5,5,5,'2020-09-08','2019-01-01',NULL,2,4,'si','no','si','no','Aventuras Incachaka','Hemoso ambiente ecologico'),(7,1,1,1,1,1,'2020-09-08','2019-12-31',NULL,2,2,'','no','no','no','Cinco estrellas','Excelente servicio y atencion');
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-25 14:29:18
