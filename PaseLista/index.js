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
	
	event.preventDefault();
			usuario = $("#txtUsuario").val();
			contraseña = $("#txtContraseña").val();
	$.ajax({
		url:'https://itculiacan.edu.mx/dadm/apipaselista/data/validausuario.php?usuario='+usuario+'&clave='+contraseña, 
		dataType: 'json',
		type: 'post',
		success: function(data)
		{
			if(data.respuesta == true)
			{
				periodo = data.periodoactual;
				alert("Inicio Correcto");
				pantallaGrupos = new BrowserWindow({width:320,height:425});
				pantallaGrupos.loadURL(url.format({
				pathname: path.join(__dirname,'Grupo de maestros.html'),
				protocol: 'file',
				slashes: true
	}));
	//pantallaDetalle.webContents.openDevTools();
	pantallaGrupos.show();//Mostrar pantalla
	$("#txtContraseña").val("");
	$("#txtUsuario").val("");

			}
			else
				alert("Usuario o Contraseña incorrectos")
		} 
	});
}

$("#btnEnviar").on("click",botonEnviar);