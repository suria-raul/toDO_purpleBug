<?php 

include 'connection.php';
 
$order_id = $_POST['order_id'];
$user = $_POST['fullName'];
$bread = $_POST['bread'];
$sauce = $_POST['sauce'];
$sandwich = $_POST['sandwich'];
$cheese = $_POST['cheese'];
$veggie = $_POST['veggies'];

$updateQuery = "UPDATE orders SET bread = '$bread', sauce = '$sauce', sandwich = '$sandwich', cheese = '$cheese', veggie = '$veggie', user = '$user' WHERE order_id = '$order_id' ";

if (!$result = mysqli_query($connection, $updateQuery)) {
        exit(mysqli_error($connection));
	}

echo "Success";

 ?>