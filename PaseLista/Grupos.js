const $ = require('jquery');
const {BrowserWindow} = require('electron').remote
const path = require('path')
const app = require('electron').app 
const url = require('url')

let GrupoMaestros;
/*var Grupo = new Array(20);

function datos(nombre,genero,foto,direccion,telefono)
{
	this.nombre = nombre;
	this.genero = genero;
	this.foto = foto;
	this.direccion = direccion;
	this.telefono = telefono;
}*/
function inicia()
{
	var resultado = "";
	var grupos = "";
	var claveMateria = "";
	var nombreMateria = "";
	var claveGrupo = "";

	$.ajax({
		url:'', 
		dataType: 'json',
		success: function(data)
		{
			for(var i=0;i<3;i++)
			{
				claveMateria = data.results[i].  ;
				nombreMateria = data.results[i].  ;	
				claveGrupo = data.results[i].   ;
						
				$("#lstGrupos").html(claveMateria,claveGrupo,nombreMateria);
			}
		} 
	});
}

/*function botonDetalle()
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
}*/

$("body").on("click","li > button",botonDetalle);


inicia();