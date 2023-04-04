<?php

namespace App\Models;

use App\Database;

class Order
{
    protected $result;

    protected Database $database;

    public array $data = [];

    public function __construct()
    {
        $this->database = new Database();
        $this->result = mysqli_query($this->database->connect(), "SELECT * FROM orders");
    }

    private function isConnected()
    {
        if (!$this->result) {
            exit(mysqli_error($this->database->connect()));
        }

        return true;
    }

    private function hasData()
    {
        return mysqli_num_rows($this->result) > 0;
    }

    public function all()
    {
        if ($this->isConnected() && $this->hasData()) {
            while ($row = mysqli_fetch_assoc($this->result)) {
                $this->data[] = $row;
            }
        } else {
            $this->data[] = 'No Orders Found!';
        }

        echo json_encode($this->data);
    }
}