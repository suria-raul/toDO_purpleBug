<?php

namespace App;

class Database {

    private $host = 'db';

    private $username = 'db';

    private $password = 'db';

    private $database = 'db';

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