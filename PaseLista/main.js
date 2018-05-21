const {app,BrowserWindow} =  require('electron') 
const path = require('path')
const url = require('url')

let pantallaPrincipal;

/*global.infoAlumnos = {
	
}*/

function muestraPantallaPrincipal()
 {//Creacion de la primera pantalla
	pantallaPrincipal = new BrowserWindow({width:320,height:425});
	//Pagina que se va a cargar dentro del proyecto
	pantallaPrincipal.loadURL(url.format({     
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file',
			slashes: true //Que tome en cuenta las diagonales
	}))
	pantallaPrincipal.webContents.openDevTools(); //Inspector de elementos para cuando algo no funciona
	pantallaPrincipal.show();//Mostrar pantalla
}

app.on('ready',muestraPantallaPrincipal)