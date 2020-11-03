<?php
if(isset($_POST["insert"]))
{
 $conn = mysqli_connect("localhost", "root", "", "checkbox");
 $query = "INSERT INTO checkbox(unit) values ('".$_POST["insert"]."')";
 $result = mysqli_query($conn, $query);
 echo "Data Inserted Successfully!";
}
?>
