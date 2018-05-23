const $ = require('jquery');
const {BrowserWindow} = require('electron').remote
const app = require('electron').app  
const path = require('path')
const url = require('url')

let pantallaGrupos;

function botonEnviar()
{
	var respuesta = "";
	var usuario = "";
	var periodo = "";
	var contraseña = "";
	var usuarioValida = "";

	$.ajax({
		url:'http://itculiacan.edu.mx/dadm/apipaselista/data/validausuario.php?usuario=920&clave=12345678', 
		dataType: 'json',
		success: function(data)
		{
			usuario = document.getElementById("#txtContraseña");
			contraseña = document.getElementById("#txtContraseña");
			alert(usuario);
			alert(contraseña);
			//alert(#txtUsuario);
			//alert(#txtContraseña);
			if("respuesta" == true)
			{
				periodo = data.periodoactual;
				alert("Inicio Correcto");
			}
			else
				alert("Usuario o Contraseña incorrectos")
		} 
	});
}

$("body").on("click","button",botonEnviar);