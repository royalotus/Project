<?php
$connection = new mysqli("localhost", "root", "", "CMS") or die(mysqli_error());

$getData = "select * from Year_1";


$qur = $connection->query($getData);





while($r = mysqli_fetch_assoc($qur)){





$msg[] = array("name" => $r['subject_name']);


}


$json = $msg;





header('content-type: application/json');


echo json_encode($json);

// Assign each record in the result to an array
   while ($row = mysqli_fetch_array($result))
   {
       // Assign each array element to a variable
       $id = $row['sno'];
       $name = $row['subject_name'];


}



@mysqli_close($conn);


?>
