const $ = require('jquery')
const {BrowserWindow} = require('electron').remote
const app = require('electron').app;
//Constantes para el PDF
const ipc = require('electron').ipcRenderer
const botonPDF = document.getElementById('btnPDF')
///Activamos el evento click del botn btnPDF
botonPDF.addEventListener('click',function(event){
	botonPDF.style.display = "none"
	ipc.send('print-to-PDF')
})

var nombre = require('electron').remote.getGlobal('infoUsuarios').nombre;
var genero = require('electron').remote.getGlobal('infoUsuarios').genero; 
var foto = require('electron').remote.getGlobal('infoUsuarios').foto;
var direccion = require('electron').remote.getGlobal('infoUsuarios').direccion;
var telefono = require('electron').remote.getGlobal('infoUsuarios').telefono;

$("#idNombre").html(nombre);
$("#idGenero").html(genero);
$("#idDireccion").html(direccion);
$("#idTelefono").html(telefono);
$("#idFoto").attr("src",foto);
