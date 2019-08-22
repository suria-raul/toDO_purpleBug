<?php 

include 'connection.php';

$data = "<table class='table'>
                        <tr>
                            <th>No.</th>
                            <th>User</th>
                            <th>Bread</th>
                            <th>Sauce</th>
                            <th>Sandwich</th>
                            <th>Cheese</th>
                            <th>Veggie</th>
                            <th>Date and time</th>
                            <th>Actions</th>
                        </tr>";


    $query = "SELECT * FROM orders";

    if (!$result = mysqli_query($connection, $query)) {
        exit(mysqli_error($connection));
    }

    if(mysqli_num_rows($result) > 0)
    {
        $number = 1;
        while($row = mysqli_fetch_assoc($result))
        {
            $data .= '<tr>
                <td>'.$number.'</td>
                <td>'.$row['user'].'</td>
                <td>'.$row['bread'].'</td>
                <td>'.$row['sauce'].'</td>
                <td>'.$row['sandwich'].'</td>
                <td>'.$row['cheese'].'</td>
                <td>'.$row['veggie'].'</td>
                <td>'.$row['order_at'].'</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteOrder('.$row['order_id'].')">Delete</button>
                </td>
                <td>
                    <button data-toggle="modal" data-target="#myModal" class="btn btn-warning" onclick="getOrderDetails('.$row['order_id'].')">Update</button>
                </td>
                <td>
                    <button class="btn btn-primary" onclick="JSONviewer('.$row['order_id'].')">JSON</button>
                </td>                
            </tr>';
            $number++;
        }
    }
    else
    {

        $data .= '<tr><td colspan="10">Records not found!</td></tr>';
    }

    $data .= '</table>';

    echo $data;
