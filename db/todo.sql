-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2018 at 08:02 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id6735026_todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `bread` varchar(255) NOT NULL,
  `sauce` varchar(255) NOT NULL,
  `sandwich` varchar(255) NOT NULL,
  `cheese` varchar(255) NOT NULL,
  `veggie` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `order_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `bread`, `sauce`, `sandwich`, `cheese`, `veggie`, `user`, `order_at`) VALUES
(21, 'Jalapeno Parmesan', 'Honey Mustard', 'Savory Ham', 'Pepperjack', 'Peppers and Banana', 'Another Test', '2018-08-08 07:03:55pm'),
(22, 'Whole Wheat', 'Mayo', 'Turkey Bacon Club', 'American', 'Onion', 'Edited again', '2018-08-08 07:04:38pm'),
(23, 'Jalapeno Parmesan', 'Spicy Mayo', 'Italian', 'Pepperjack', 'Peppers and Banana', 'tester edited', '2018-08-08 07:05:49pm'),
(24, 'Jalapeno Parmesan', 'Spicy Mayo', 'Italian', 'Pepperjack', 'Peppers and Banana', 'Final Added Test', '2018-08-08 07:11:51pm'),
(25, 'Jalapeno Parmesan', 'Honey Mustard', 'Savory Ham', 'Pepperjack', 'Peppers and Banana', 'FInal Added test', '2018-08-08 07:13:10pm'),
(26, 'Jalapeno Parmesan', 'Spicy Mayo', 'Italian', 'Pepperjack', 'Peppers and Jalapeno', 'final final final', '2018-08-08 07:14:19pm'),
(27, 'Jalapeno Parmesan', 'Spicy Mayo', 'Italian', 'Pepperjack', 'Peppers and Banana', 'final final final final', '2018-08-08 07:16:25pm');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
