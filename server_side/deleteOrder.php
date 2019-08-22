<?php 
include 'connection.php';

$order_id = $_POST['order_id'];

$deleteQue = "DELETE FROM orders WHERE order_id = '$order_id'";

$delete = mysqli_query($connection, $deleteQue);

if (!$delete) {
	exit(mysqli_error($connection));
} else {
	echo "Deleted Successfully";
}
