-- MySQL dump 10.13  Distrib 5.5.42, for osx10.6 (i386)
--
-- Host: localhost    Database: typefaster
-- ------------------------------------------------------
-- Server version	5.5.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `words`
--

DROP TABLE IF EXISTS `words`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `words` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `words`
--

LOCK TABLES `words` WRITE;
/*!40000 ALTER TABLE `words` DISABLE KEYS */;
INSERT INTO `words` VALUES (1,'a');
INSERT INTO `words` VALUES (2,'apple');
INSERT INTO `words` VALUES (3,'abandon');
INSERT INTO `words` VALUES (4,'ability');
INSERT INTO `words` VALUES (5,'able');
INSERT INTO `words` VALUES (6,'about');
INSERT INTO `words` VALUES (7,'above');
INSERT INTO `words` VALUES (8,'abroad');
INSERT INTO `words` VALUES (9,'absence');
INSERT INTO `words` VALUES (10,'absent');
INSERT INTO `words` VALUES (11,'absolute');
INSERT INTO `words` VALUES (12,'absolutely');
INSERT INTO `words` VALUES (13,'absorb');
INSERT INTO `words` VALUES (14,'abuse');
INSERT INTO `words` VALUES (15,'academic');
INSERT INTO `words` VALUES (16,'accent');
INSERT INTO `words` VALUES (17,'accept');
INSERT INTO `words` VALUES (18,'acceptable');
INSERT INTO `words` VALUES (19,'access');
INSERT INTO `words` VALUES (20,'accident');
INSERT INTO `words` VALUES (21,'accidental');
INSERT INTO `words` VALUES (22,'accidentally');
INSERT INTO `words` VALUES (23,'accommodation');
INSERT INTO `words` VALUES (24,'accompany');
INSERT INTO `words` VALUES (25,'according');
INSERT INTO `words` VALUES (26,'account');
INSERT INTO `words` VALUES (27,'accurate');
INSERT INTO `words` VALUES (28,'accurately');
/*!40000 ALTER TABLE `words` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-01 16:00:28
