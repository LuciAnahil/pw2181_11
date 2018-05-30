<?php
include 'conexiones.php';
function guardarusuarios()
{
	$respuesta = false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	$nombre = GetSQLValueString($_POST["nombre"],"text");
	$clave = GetSQLValueString(md5($_POST["clave"],"text"));
	//Conectarnos al servidor de BD.
	$con = conecta();
	$consulta = sprintf("select usuario from usuarios where usuario =%s limit 1",$usuario);
	$resConsulta = mysqli_query($con,$consulta);
	$consultaguarda="";
	
	if(mysqli_num_rows($resConsulta) > 0){
		$consultaguarda=sprintf("update usuarios set nombre=%s,clave=%s where usuario=%s",$nombre,$clave,$usuario);
	}
	else{
		$consultaguarda=sprintf("insert into usuarios values(default,%s,%s,%s)",$usuario,$nombre,$clave);
	}
	mysqli_query($con,$consultaguarda);
	if(mysqli_affected_rows($con)>0){
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	//var_dump($salidaJSON);
	print json_encode($salidaJSON);
}

$opc = $_POST["opc"];
switch ($opc) {
	case 'guardarusuario':
		guardarusuarios();
		break;
	
	default:
		# code...
		break;
}
?>