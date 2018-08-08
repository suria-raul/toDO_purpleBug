<?php 
include 'connection.php';

$user = $_POST['fullName'];
$bread = $_POST['bread'];
$sauce = $_POST['sauce'];
$sandwichType = $_POST['sandwichType'];
$cheese = $_POST['cheese'];
$veggies = $_POST['veggies'];
$dateTime = date("Y-m-d h:i:sa");

$sqlQuery = "INSERT INTO orders(bread, sauce, sandwich, cheese, veggie, user, order_at) VALUES('$bread', '$sauce', '$sandwichType', '$cheese', '$veggies', '$user', '$dateTime')";

if(!$addToDb = mysqli_query($connection, $sqlQuery)){
	exit(mysqli_error($connection));
} 

$sqlRetrieveQuery = "SELECT * FROM orders WHERE user = '$user'";
$retrieve = mysqli_query($connection, $sqlRetrieveQuery);
$orderSummary = mysqli_fetch_assoc($retrieve);

echo json_encode($orderSummary);

 ?>