-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2022 at 03:49 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `realta_cookie`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail_user`
--

CREATE TABLE `detail_user` (
  `userId` int(11) NOT NULL,
  `userIp` varchar(50) NOT NULL,
  `device_type` varchar(155) NOT NULL,
  `email` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `detail_user`
--

INSERT INTO `detail_user` (`userId`, `userIp`, `device_type`, `email`) VALUES
(0, '180.242.130.39', 'Windows 10', ''),
(1, '180.242.130.39', 'Windows 10', ''),
(2, '180.252.29.246', 'Windows 10', ''),
(3, '180.252.29.246', 'Windows 10', 'testing_email');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `date_created` varchar(155) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `date_created`) VALUES
(0, '12/Oct/2021/ 02:54:34'),
(1, '12/Oct/2021/ 02:58:40'),
(2, '12/Oct/2021/ 07:25:31'),
(3, '12/Oct/2021/ 08:33:31');

-- --------------------------------------------------------

--
-- Table structure for table `visit`
--

CREATE TABLE `visit` (
  `visitId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `page_name` varchar(155) NOT NULL,
  `browser_type` varchar(155) NOT NULL,
  `visit_date` varchar(155) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `visit`
--

INSERT INTO `visit` (`visitId`, `userId`, `page_name`, `browser_type`, `visit_date`) VALUES
(13, 0, 'homepage', 'Chrome', '12/Oct/2021/ 02:54:34'),
(14, 1, 'homepage', 'Chrome', '12/Oct/2021/ 02:58:39'),
(15, 1, 'homepage', 'Chrome', '12/Oct/2021/ 06:47:45'),
(16, 1, 'homepage', 'Chrome', '12/Oct/2021/ 06:51:53'),
(17, 1, 'homepage', 'Chrome', '12/Oct/2021/ 06:52:11'),
(18, 1, 'homepage', 'Chrome', '12/Oct/2021/ 06:52:13'),
(19, 1, 'homepage', 'Chrome', '12/Oct/2021/ 06:52:21'),
(20, 1, 'homepage', 'Chrome', '12/Oct/2021/ 07:23:14'),
(21, 1, 'homepage', 'Chrome', '12/Oct/2021/ 07:23:35'),
(22, 1, 'homepage', 'Chrome', '12/Oct/2021/ 07:24:19'),
(23, 1, 'homepage', 'Chrome', '12/Oct/2021/ 07:24:20'),
(24, 1, 'homepage', 'Chrome', '12/Oct/2021/ 07:24:22'),
(25, 1, 'homepage', 'Chrome', '12/Oct/2021/ 07:24:24'),
(26, 1, 'homepage', 'Chrome', '12/Oct/2021/ 07:24:25'),
(27, 2, 'homepage', 'Chrome', '12/Oct/2021/ 07:25:30'),
(28, 2, 'homepage', 'Chrome', '12/Oct/2021/ 07:25:49'),
(29, 2, 'homepage', 'Chrome', '12/Oct/2021/ 08:22:25'),
(30, 2, 'solution', 'Chrome', '12/Oct/2021/ 08:22:28'),
(31, 2, 'solution', 'Chrome', '12/Oct/2021/ 08:22:31'),
(32, 2, 'company', 'Chrome', '12/Oct/2021/ 08:22:56'),
(33, 2, 'career', 'Chrome', '12/Oct/2021/ 08:22:59'),
(34, 2, 'blog', 'Chrome', '12/Oct/2021/ 08:23:02'),
(35, 2, 'contact', 'Chrome', '12/Oct/2021/ 08:23:04'),
(36, 3, 'homepage', 'Chrome', '13/Oct/2021/ 03:11:08'),
(37, 3, 'homepage', 'Chrome', '13/Oct/2021/ 03:11:30'),
(38, 3, 'homepage', 'Chrome', '14/Oct/2021/ 05:57:31'),
(39, 3, 'solution', 'Chrome', '14/Oct/2021/ 05:58:59'),
(40, 3, 'solution', 'Chrome', '14/Oct/2021/ 05:59:14'),
(41, 3, 'homepage', 'Chrome', '14/Oct/2021/ 05:59:16'),
(42, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:11:38'),
(43, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:12:18'),
(44, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:13:00'),
(45, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:13:01'),
(46, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:13:58'),
(47, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:15:26'),
(48, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:15:41'),
(49, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:16:42'),
(50, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:16:55'),
(51, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:17:11'),
(52, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:17:31'),
(53, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:17:37'),
(54, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:17:45'),
(55, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:17:52'),
(56, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:18:06'),
(57, 3, 'solution', 'Chrome', '14/Oct/2021/ 06:18:09'),
(58, 3, 'solution', 'Chrome', '14/Oct/2021/ 06:18:29'),
(59, 3, 'solution', 'Chrome', '14/Oct/2021/ 06:18:43'),
(60, 3, 'solution', 'Chrome', '14/Oct/2021/ 06:19:05'),
(61, 3, 'solution', 'Chrome', '14/Oct/2021/ 06:19:13'),
(62, 3, 'solution', 'Chrome', '14/Oct/2021/ 06:19:20'),
(63, 3, 'solution', 'Chrome', '14/Oct/2021/ 06:19:37'),
(64, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:19:52'),
(65, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:20:10'),
(66, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:20:23'),
(67, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:20:32'),
(68, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:20:51'),
(69, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:21:09'),
(70, 3, 'solution', 'Chrome', '14/Oct/2021/ 06:21:15'),
(71, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:21:21'),
(72, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:21:29'),
(73, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:21:39'),
(74, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:22:17'),
(75, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:22:24'),
(76, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:23:59'),
(77, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:26:21'),
(78, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:59:35'),
(79, 3, 'homepage', 'Chrome', '14/Oct/2021/ 06:59:48'),
(80, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:00:04'),
(81, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:00:46'),
(82, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:01:25'),
(83, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:01:44'),
(84, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:01:53'),
(85, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:02:01'),
(86, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:02:23'),
(87, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:02:40'),
(88, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:02:59'),
(89, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:03:14'),
(90, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:03:39'),
(91, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:30:42'),
(92, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:31:01'),
(93, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:31:12'),
(94, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:31:25'),
(95, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:31:58'),
(96, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:32:08'),
(97, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:32:29'),
(98, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:32:43'),
(99, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:32:53'),
(100, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:33:26'),
(101, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:33:36'),
(102, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:33:56'),
(103, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:34:14'),
(104, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:34:20'),
(105, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:35:00'),
(106, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:36:19'),
(107, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:36:43'),
(108, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:38:11'),
(109, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:38:32'),
(110, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:39:11'),
(111, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:40:11'),
(112, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:40:25'),
(113, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:40:34'),
(114, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:42:15'),
(115, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:45:22'),
(116, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:45:36'),
(117, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:46:13'),
(118, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:46:20'),
(119, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:48:23'),
(120, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:48:31'),
(121, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:53:06'),
(122, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:53:16'),
(123, 3, 'homepage', 'Chrome', '14/Oct/2021/ 07:54:04'),
(124, 3, 'homepage', 'Chrome', '14/Oct/2021/ 01:42:08'),
(125, 3, 'homepage', 'Chrome', '15/Oct/2021/ 12:19:14'),
(126, 3, 'homepage', 'Chrome', '15/Oct/2021/ 12:20:29'),
(127, 3, 'homepage', 'Chrome', '15/Oct/2021/ 12:20:31'),
(128, 3, 'homepage', 'Chrome', '15/Oct/2021/ 12:21:22'),
(129, 3, 'homepage', 'Chrome', '15/Oct/2021/ 12:22:43'),
(130, 3, 'homepage', 'Chrome', '15/Oct/2021/ 12:28:38'),
(131, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:07:48'),
(132, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:11:27'),
(133, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:11:51'),
(134, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:12:02'),
(135, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:12:10'),
(136, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:12:38'),
(137, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:12:50'),
(138, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:13:10'),
(139, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:13:22'),
(140, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:13:32'),
(141, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:13:46'),
(142, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:15:19'),
(143, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:15:34'),
(144, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:15:45'),
(145, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:16:44'),
(146, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:17:10'),
(147, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:17:27'),
(148, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:17:37'),
(149, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:18:07'),
(150, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:18:29'),
(151, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:18:48'),
(152, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:19:48'),
(153, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:20:10'),
(154, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:20:25'),
(155, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:20:39'),
(156, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:20:54'),
(157, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:21:12'),
(158, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:22:07'),
(159, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:22:45'),
(160, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:23:03'),
(161, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:23:41'),
(162, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:24:14'),
(163, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:24:31'),
(164, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:24:54'),
(165, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:25:13'),
(166, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:25:38'),
(167, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:26:12'),
(168, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:27:03'),
(169, 3, 'homepage', 'Chrome', '15/Oct/2021/ 02:28:03'),
(170, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:07:23'),
(171, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:07:52'),
(172, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:08:07'),
(173, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:09:54'),
(174, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:10:09'),
(175, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:10:19'),
(176, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:10:24'),
(177, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:10:31'),
(178, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:11:09'),
(179, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:11:17'),
(180, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:11:42'),
(181, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:12:16'),
(182, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:12:29'),
(183, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:13:08'),
(184, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:14:00'),
(185, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:14:20'),
(186, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:14:30'),
(187, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:14:41'),
(188, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:14:58'),
(189, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:15:48'),
(190, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:16:30'),
(191, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:17:15'),
(192, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:18:28'),
(193, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:18:50'),
(194, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:19:06'),
(195, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:19:18'),
(196, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:19:27'),
(197, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:19:36'),
(198, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:20:16'),
(199, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:20:31'),
(200, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:20:56'),
(201, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:21:06'),
(202, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:21:24'),
(203, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:21:44'),
(204, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:21:59'),
(205, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:22:09'),
(206, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:22:53'),
(207, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:23:09'),
(208, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:23:34'),
(209, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:24:26'),
(210, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:24:40'),
(211, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:25:36'),
(212, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:42:34'),
(213, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:43:04'),
(214, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:43:19'),
(215, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:43:25'),
(216, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:43:32'),
(217, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:43:53'),
(218, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:44:05'),
(219, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:44:20'),
(220, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:44:51'),
(221, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:47:10'),
(222, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:48:39'),
(223, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:48:41'),
(224, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:54:02'),
(225, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:55:44'),
(226, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:55:46'),
(227, 3, 'homepage', 'Chrome', '15/Oct/2021/ 03:57:44'),
(228, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:01:06'),
(229, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:02:13'),
(230, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:02:16'),
(231, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:06:31'),
(232, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:10:19'),
(233, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:10:38'),
(234, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:11:04'),
(235, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:16:21'),
(236, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:16:56'),
(237, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:19:01'),
(238, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:21:02'),
(239, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:21:27'),
(240, 3, 'homepage', 'Chrome', '15/Oct/2021/ 04:50:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detail_user`
--
ALTER TABLE `detail_user`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `visit`
--
ALTER TABLE `visit`
  ADD PRIMARY KEY (`visitId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `visit`
--
ALTER TABLE `visit`
  MODIFY `visitId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_user`
--
ALTER TABLE `detail_user`
  ADD CONSTRAINT `detail_user_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `visit`
--
ALTER TABLE `visit`
  ADD CONSTRAINT `visit_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
