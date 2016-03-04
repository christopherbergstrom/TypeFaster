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
-- Table structure for table `highscores`
--

DROP TABLE IF EXISTS `highscores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `highscores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `initials` varchar(3) NOT NULL,
  `score` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `highscores`
--

LOCK TABLES `highscores` WRITE;
/*!40000 ALTER TABLE `highscores` DISABLE KEYS */;
INSERT INTO `highscores` VALUES (1,'CRB',1),(2,'CCB',2);
/*!40000 ALTER TABLE `highscores` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `words`
--

LOCK TABLES `words` WRITE;
/*!40000 ALTER TABLE `words` DISABLE KEYS */;
INSERT INTO `words` VALUES 
(1,'about'),
(2,'after'),
(3,'again'),
(4,'air'),
(5,'all'),
(6,'along'),
(7,'also'),
(8,'an'),
(9,'and'),
(10,'another'),
(11,'any'),
(12,'are'),
(13,'around'),
(14,'as'),
(15,'at'),
(16,'away'),
(17,'back'),
(18,'be'),
(19,'because'),
(20,'been'),
(21,'before'),
(22,'below'),
(23,'between'),
(24,'both'),
(25,'but'),
(26,'by'),
(27,'came'),
(28,'can'),
(29,'come'),
(30,'could'),
(31,'day'),
(32,'did'),
(33,'different'),
(34,'do'),
(35,'does'),
(36,'don\'t'),
(37,'down'),
(38,'each'),
(39,'end'),
(40,'even'),
(41,'every'),
(42,'few'),
(43,'find'),
(44,'first'),
(45,'for'),
(46,'found'),
(47,'from'),
(48,'get'),
(49,'give'),
(50,'go'),
(51,'good'),
(52,'great'),
(53,'had'),
(54,'has'),
(55,'have'),
(56,'he'),
(57,'help'),
(58,'her'),
(59,'here'),
(60,'him'),
(61,'his'),
(62,'home'),
(63,'house'),
(64,'how'),
(65,'I'),
(66,'if'),
(67,'in'),
(68,'into'),
(69,'is'),
(70,'it'),
(71,'its'),
(72,'just'),
(73,'know'),
(74,'large'),
(75,'last'),
(76,'left'),
(77,'like'),
(78,'line'),
(79,'little'),
(80,'long'),
(81,'look'),
(82,'made'),
(83,'make'),
(84,'man'),
(85,'many'),
(86,'may'),
(87,'me'),
(88,'men'),
(89,'might'),
(90,'more'),
(91,'most'),
(92,'Mr.'),
(93,'must'),
(94,'my'),
(95,'name'),
(96,'never'),
(97,'new'),
(98,'next'),
(99,'no'),
(100,'not'),
(101,'now'),
(102,'number'),
(103,'of'),
(104,'off'),
(105,'old'),
(106,'on'),
(107,'one'),
(108,'only'),
(109,'or'),
(110,'other'),
(111,'our'),
(112,'out'),
(113,'over'),
(114,'own'),
(115,'part'),
(116,'people'),
(117,'place'),
(118,'put'),
(119,'read'),
(120,'right'),
(121,'said'),
(122,'same'),
(123,'saw'),
(124,'say'),
(125,'see'),
(126,'she'),
(127,'should'),
(128,'show'),
(129,'small'),
(130,'so'),
(131,'some'),
(132,'something'),
(133,'sound'),
(134,'still'),
(135,'such'),
(136,'take'),
(137,'tell'),
(138,'than'),
(139,'that'),
(140,'the'),
(141,'them'),
(142,'then'),
(143,'there'),
(144,'these'),
(145,'they'),
(146,'thing'),
(147,'think'),
(148,'this'),
(149,'those'),
(150,'thought'),
(151,'three'),
(152,'through'),
(153,'time'),
(154,'to'),
(155,'together'),
(156,'too'),
(157,'two'),
(158,'under'),
(159,'up'),
(160,'us'),
(161,'use'),
(162,'very'),
(163,'want'),
(164,'was'),
(165,'water'),
(166,'way'),
(167,'we'),
(168,'well'),
(169,'went'),
(170,'were'),
(171,'what'),
(172,'when'),
(173,'where'),
(174,'which'),
(175,'while'),
(176,'who'),
(177,'why'),
(178,'will'),
(179,'with'),
(180,'word'),
(181,'work'),
(182,'world'),
(183,'would'),
(184,'write'),
(185,'year'),
(186,'you'),
(187,'your');
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

-- Dump completed on 2016-03-04  9:48:08
