-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 11 sep. 2023 à 15:01
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `article`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `Id_User` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `title`, `description`, `image`, `Id_User`) VALUES
(1, 'The missile', 'The missile knows where it is at all times. It knows this because it knows where it isn\'t. By subtracting where it is from where it isn\'t, or where it isn\'t from where it is (whichever is greater), it obtains a difference, or deviation. The guidance subsystem uses deviations to generate corrective commands to drive the missile from a position where it is to a position where it isn\'t, and arriving at a position where it wasn\'t, it now is. Consequently, the position where it is, is now the position that it wasn\'t, and it follows that the position that it was, is now the position that it isn\'t.\nIn the event that the position that it is in is not the position that it wasn\'t, the system has acquired a variation, the variation being the difference between where the missile is, and where it wasn\'t. If variation is considered to be a significant factor, it too may be corrected by the GEA. However, the missile must also know where it was.\nThe missile guidance computer scenario works as follows. Because a variation has modified some of the information the missile has obtained, it is not sure just where it is. However, it is sure where it isn\'t, within reason, and it knows where it was. It now subtracts where it should be from where it wasn\'t, or vice-versa, and by differentiating this from the algebraic sum of where it shouldn\'t be, and where it was, it is able to obtain the deviation and its variation, which is called error.In the event that the position that it is in is not the position that it wasn\'t, the system has acquired a variation, the variation being the difference between where the missile is, and where it wasn\'t. If variation is considered to be a significant factor, it too may be corrected by the GEA. However, the missile must also know where it was.\nThe missile guidance computer scenario works as follows. Because a variation has modified some of the information the missile has obtained, it is not sure just where it is. However, it is sure where it isn\'t, within reason, and it knows where it was. It now subtracts where it should be from where it wasn\'t, or vice-versa, and by differentiating this from the algebraic sum of where it shouldn\'t be, and where it was, it is able to obtain the deviation and its variation, which is called error.In the event that the position that it is in is not the position that it wasn\'t, the system has acquired a variation, the variation being the difference between where the missile is, and where it wasn\'t. If variation is considered to be a significant factor, it too may be corrected by the GEA. However, the missile must also know where it was.\nThe missile knows where it is at all times. It knows this because it knows where it isn\'t. By subtracting where it is from where it isn\'t, or where it isn\'t from where it is (whichever is greater), it obtains a difference, or deviation. The guidance subsystem uses deviations to generate corrective commands to drive the missile from a position where it is to a position where it isn\'t, and arriving at a position where it wasn\'t, it now is. Consequently, the position where it is, is now the position that it wasn\'t, and it follows that the position that it was, is now the position that it isn\'t.\nIn the event that the position that it is in is not the position that it wasn\'t, the system has acquired a variation, the variation being the difference between where the missile is, and where it wasn\'t. If variation is considered to be a significant factor, it too may be corrected by the GEA. However, the missile must also know where it was.\nThe missile guidance computer scenario works as follows. Because a variation has modified some of the information the missile has obtained, it is not sure just where it is. However, it is sure where it isn\'t, within reason, and it knows where it was. It now subtracts where it should be from where it wasn\'t, or vice-versa, and by differentiating this from the algebraic sum of where it shouldn\'t be, and where it was, it is able to obtain the deviation and its variation, which is called error.', 'https://i.kym-cdn.com/entries/icons/original/000/023/170/tom.jpg', 6),
(2, 'TONK', 'THE TONK', 'https://images3.memedroid.com/images/UPLOADED234/5d6e2cfc0614f.jpeg', 6),
(4, 'Nicolas Article', 'La congolexomatisation des lois du marché en République démocratique du Congo (RDC) représente une évolution majeure de son économie. Ce phénomène, bien que complexe, peut être compris à travers plusieurs prismes.\r\n\r\nTout d\'abord, il est crucial de reconnaître que la RDC possède d\'immenses ressources naturelles, notamment des minéraux rares, des terres arables et des forêts tropicales. Ces atouts font de ce pays un acteur clé sur la scène économique mondiale. La congolexomatisation se réfère à la transformation rapide de l\'économie congolaise pour s\'aligner sur les forces du marché mondial et exploiter ces ressources.\r\n\r\nCependant, ce processus ne se fait pas sans défis majeurs. La RDC a connu des décennies de conflits internes et d\'instabilité politique, ce qui a souvent entravé le développement économique. La gouvernance, la corruption et l\'infrastructure inadéquate sont des obstacles persistants à la congolexomatisation.\r\n\r\nSur le plan environnemental, l\'exploitation des ressources naturelles peut avoir des conséquences dévastatrices, notamment la déforestation, la pollution des cours d\'eau et la destruction de la biodiversité. Il est impératif que la RDC adopte des pratiques durables pour préserver son environnement précieux.\r\n\r\nCependant, il existe des opportunités significatives dans ce contexte. La demande mondiale croissante de minéraux essentiels pour les technologies modernes, tels que le cobalt pour les batteries, crée des perspectives de croissance économique. De plus, la RDC peut développer son secteur agricole pour devenir un acteur clé dans la sécurité alimentaire de la région.\r\n\r\nLa coopération internationale joue un rôle crucial dans la congolexomatisation. Les investissements étrangers responsables, l\'assistance technique et la promotion de la bonne gouvernance sont essentiels pour soutenir la RDC dans cette transition.\r\n\r\nEn conclusion, la congolexomatisation des lois du marché en RDC est un processus complexe avec des défis considérables, mais aussi des opportunités économiques majeures. Il est impératif de naviguer avec prudence pour assurer un développement durable et équilibré, tout en préservant l\'environnement précieux de ce pays d\'Afrique centrale.', 'https://i.pinimg.com/originals/32/d0/93/32d0933627c3ca55d177f1aa280fdc8f.jpg', 7),
(5, 'Mon Blog', 'CECI EST UN ARTICLE DE BLOG', 'https://img.freepik.com/photos-gratuite/message-ligne-blog-chat-communication-enveloppe-icone-graphique-concept_53876-139717.jpg', 8);

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `Id_User` int(11) NOT NULL,
  `Id_Article` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `date`, `title`, `description`, `Id_User`, `Id_Article`) VALUES
(1, '2023-09-11', 'Missile', 'I will find you F35', 10, 1),
(2, '2023-09-10', 'AIM-9', 'AIM-9 for the win', 9, 1);

-- --------------------------------------------------------

--
-- Structure de la table `commentreplies`
--

CREATE TABLE `commentreplies` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` text NOT NULL,
  `Id_Comment` int(11) NOT NULL,
  `Id_User` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commentreplies`
--

INSERT INTO `commentreplies` (`id`, `date`, `description`, `Id_Comment`, `Id_User`) VALUES
(1, '2023-09-11', 'GET AWAY FROM ME YOU DEMON', 1, 9);

-- --------------------------------------------------------

--
-- Structure de la table `follow`
--

CREATE TABLE `follow` (
  `Id` int(11) NOT NULL,
  `Id_UserFollowed` int(11) NOT NULL,
  `Id_UserFollower` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `follow`
--

INSERT INTO `follow` (`Id`, `Id_UserFollowed`, `Id_UserFollower`) VALUES
(15, 7, 6),
(10, 6, 7),
(12, 6, 8);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `Id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`Id`, `name`, `email`, `password`) VALUES
(6, 'Tyrado', 'Test@Test.com', '$2b$10$cjuZDRoSzzyghWWfRPvs6.QFKK2MKQjDlXGLr7vZbnyHSel1Cche6'),
(7, 'Nicolas', 'Nicolas@gmail.com', '$2b$10$SxipVKHbajugEzNaaehIAuqDMzd5q7ho5BwTCT1TrGN2AGQiioWKC'),
(8, 'LeBlogueur', 'blog@blog.com', '$2b$10$nOeppog2Bc25YJ/2Gk6diuwT8Sx2cb/gHP5D2vk5Wg9yEKyBEVVtO'),
(9, 'F35', 'F35@america.us', '$2b$10$ctGu3lygVvhm2ECFNhmiue.4yj13/O94GMmLFfVmebf3SHkOiHcLy'),
(10, 'Raffale', 'Raffale@france.fr', '$2b$10$4Ed7VwlpIxCK2MVwfhILiO1wOEIjRqZge82WuMH8VYao0zYWKUyja');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article_User_FK` (`Id_User`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_User_FK` (`Id_User`),
  ADD KEY `comment_Article_FK` (`Id_Article`);

--
-- Index pour la table `commentreplies`
--
ALTER TABLE `commentreplies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `commentreplies_User_FK` (`Id_User`),
  ADD KEY `commentreplies_Comment_FK` (`Id_Comment`);

--
-- Index pour la table `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`Id`,`Id_UserFollowed`),
  ADD KEY `follow_User_FK_1` (`Id_UserFollowed`),
  ADD KEY `follow_User_FK_2` (`Id_UserFollower`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `commentreplies`
--
ALTER TABLE `commentreplies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `follow`
--
ALTER TABLE `follow`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_User_FK` FOREIGN KEY (`Id_User`) REFERENCES `user` (`Id`);

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_Article_FK` FOREIGN KEY (`Id_Article`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `comment_User_FK` FOREIGN KEY (`Id_User`) REFERENCES `user` (`Id`);

--
-- Contraintes pour la table `commentreplies`
--
ALTER TABLE `commentreplies`
  ADD CONSTRAINT `commentreplies_Comment_FK` FOREIGN KEY (`Id_Comment`) REFERENCES `comment` (`id`),
  ADD CONSTRAINT `commentreplies_User_FK` FOREIGN KEY (`Id_User`) REFERENCES `user` (`Id`);

--
-- Contraintes pour la table `follow`
--
ALTER TABLE `follow`
  ADD CONSTRAINT `follow_User_FK_1` FOREIGN KEY (`Id_UserFollowed`) REFERENCES `user` (`Id`),
  ADD CONSTRAINT `follow_User_FK_2` FOREIGN KEY (`Id_UserFollower`) REFERENCES `user` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
