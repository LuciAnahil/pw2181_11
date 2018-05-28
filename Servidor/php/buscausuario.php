<?php
include 'conexiones.php';
function buscausuario()
{
	$respuesta = false;
	$usuario = $_POST["usuario"];
	//Conectarnos al servidor de BD.
	$con = conecta();
	$consulta = "select * from usuarios where usuario= '".$usuario."' limit 1";
	$resConsulta = mysqli_query($con,$consulta);
	$nombre = "";
	$clave = "";

	if(mysqli_num_rows($resConsulta) > 0)
	{
		$respuesta = true;
		while ($regConsulta = mysqli_fetch_array($resConsulta)) 
		{
			$nombre = utf8_encode($regConsulta["nombre"]);
			$clave = $regConsulta["clave"];
		}
	}
	$salidaJSON = array('respuesta' => $respuesta,
						'nombre'    => $nombre,
						'clave'     => $clave);
	//var_dump($salidaJSON);
	print json_encode($salidaJSON);
}


$opc = $_POST["opc"];
switch ($opc) {
	case 'buscaUsuario':
		buscausuario();
		break;
	
	default:
		# code...
		break;
}
?>