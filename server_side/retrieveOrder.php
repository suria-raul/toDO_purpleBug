<?php

include 'connection.php';

$data = [];

$query = "SELECT * FROM orders";

if (!$result = mysqli_query($connection, $query)) {
    exit(mysqli_error($connection));
}

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
} else {
    $data[] = 'Records not found!';
}

echo json_encode($data);
