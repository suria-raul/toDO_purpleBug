<?php

namespace App;

class Database {

    private string $host = 'db';

    private string $username = 'db';

    private string $password = 'db';

    private string $database = 'db';

    protected $connection;

    public function __construct()
    {
        $this->connection = mysqli_connect($this->host, $this->username, $this->password, $this->database);
    }

    public function connect()
    {
        return $this->connection;
    }
}