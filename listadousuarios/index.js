//Main puede compartir informacion a cualquier archivo que este en el proyecto con extension .js
const $ = require('jquery');//Invocacion de jquery
const {BrowserWindow} = require('electron').remote//Sistema de ventanas   . remote indica que se conectara directamente al main.js
const app = require('electron').app //Aplicacion para poder conectarlas 
const path = require('path')//ruta
const url = require('url')

let pantallaDetalle;//Abrir pantalla nueva
var usuarios = new Array(20);

function datos(nombre,genero,foto,direccion,telefono)
{
	this.nombre = nombre;
	this.genero = genero;
	this.foto = foto;
	this.direccion = direccion;
	this.telefono = telefono;
}
function inicia()
{
	var resultado = "";
	var nombre = "";
	var foto = "";
	var genero = "";
	var direccion = "";
	var telefono = "";

	$.ajax({
		url:'https://randomuser.me/api/?results=20',//?results=20' parametro que permitira que se regresen 20 usuarios 
		dataType: 'json',
		success: function(data)
		{
			for(var i=0;i<20;i++)
			{
				nombre = data.results[i].name.first+" "+data.results[i].name.last;
				foto = data.results[i].picture.medium;	
				genero = data.results[i].gender;
				direccion = data.results[i].location.street;
				telefono = data.results[i].phone;			
				resultado = "<li><img src="+foto+">"+  nombre  +"<button id="+i+">Detalle</button>";
				$("#lstUsuarios").append(resultado);//jquery permite acceder al id ·listado de usuarios de index.html
				usuarios[i] = new datos(nombre,genero,foto,direccion,telefono);
			}
		} 
	});
}

function botonDetalle()
{
	//alert(this.id);//Mandar una alerta con el id del boton al que se le dio click
	//alert(usuarios[this.id].nombre);
	require('electron').remote.getGlobal('infoUsuarios').nombre=usuarios[this.id].nombre;
	require('electron').remote.getGlobal('infoUsuarios').genero=usuarios[this.id].genero;
	require('electron').remote.getGlobal('infoUsuarios').foto=usuarios[this.id].foto;
	require('electron').remote.getGlobal('infoUsuarios').direccion=usuarios[this.id].direccion;
	require('electron').remote.getGlobal('infoUsuarios').telefono=usuarios[this.id].telefono;

	pantallaDetalle = new BrowserWindow({width:320,height:425});
	pantallaDetalle.loadURL(url.format({
		pathname: path.join(__dirname,'detalleUsuarios.html'),
		protocol: 'file',
		slashes: true
	}));
	//pantallaDetalle.webContents.openDevTools();
	pantallaDetalle.show();//Mostrar pantalla
}

$("body").on("click","li > button",botonDetalle);


inicia();