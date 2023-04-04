<?php

require __DIR__.'/../vendor/autoload.php';

include 'connection.php';

use App\Database;

$data = [];

$query = "SELECT * FROM orders";

if (!$result = mysqli_query((new Database())->connect(), $query)) {
    exit(mysqli_error((new Database())->connect()));
}

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
} else {
    $data[] = 'Records not found!';
}

echo json_encode($data);
