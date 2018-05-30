<?php
include 'conexiones.php';
function borrarusuario()
{
	$respuesta = false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	//Conectarnos al servidor de BD.
	$con = conecta();
	//$consulta = "select usuario from usuarios where usuario= '".$usuario."' limit 1";
	$consulta = sprintf("delete form usuarios where usuario =%s",$usuario);
	mysqli_query($con,$consulta);
	
	if(mysqli_affercted_rows($con)>0)
	{
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	//var_dump($salidaJSON);
	print json_encode($salidaJSON);
}

$opc = $_POST["opc"];
switch ($opc) {
	case 'borrarusuario':
		borrarusuario();
		break;
	
	default:
		# code...
		break;
}
?>