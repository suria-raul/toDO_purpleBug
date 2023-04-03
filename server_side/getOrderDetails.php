<?php

include 'connection.php';

$order_id = $_POST['order_id'];

$query = "SELECT * FROM orders WHERE order_id = '$order_id'";
if (!$result = mysqli_query($connection, $query)) {
    exit(mysqli_error($connection));
}

$response = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $response = $row;
    }
}

echo json_encode($response);
