<?php

namespace App\Models;

use App\Database;

class Order
{
    protected Database $database;

    public array $data = [];

    public function __construct()
    {
        $this->database = new Database();
    }

    private function isConnected($query)
    {
        if (!$query) {
            exit(mysqli_error($this->database->connect()));
        }

        return true;
    }

    private function hasData($query)
    {
        return mysqli_num_rows($query) > 0;
    }

    public function all()
    {
        $query = mysqli_query($this->database->connect(), "SELECT * FROM orders");

        if ($this->isConnected($query) && $this->hasData($query)) {
            while ($row = mysqli_fetch_assoc($query)) {
                $this->data[] = $row;
            }
        } else {
            $this->data[] = 'No Orders Found!';
        }

        echo json_encode($this->data);
    }
}