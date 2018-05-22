<?php 
function conecta()
{
	$con = mysqli_connect("127.0.0.1","root","","pw218111");
	return $con;
}
?>