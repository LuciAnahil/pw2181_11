const {app,BrowserWindow} =  require('electron') // Es igual que poner app = require('electron').app y BrowserWindow = require('electron').BrowserWindow
const path = require('path') //Ruta del sistema de archivos
const url = require('url')//url de las paguinas que vamos a cargar

let pantallaPrincipal;//Definir pantalla principal, despues de que toma un valor no puede cambiar

function muestraPantallaPrincipal()
 {//Creacion de la primera pantalla
	pantallaPrincipal = new BrowserWindow({width:320,height:425});
	//Pagina que se va a cargar dentro del proyecto
	pantallaPrincipal.loadURL(url.format({     
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file',
			slashes: true //Que tome en cuenta las diagonales
	}))
	//pantallaPrincipal.webContents.openDevTools(); //Inspector de elementos para cuando algo no funciona
	pantallaPrincipal.show();//Mostrar pantalla
}

app.on('ready',muestraPantallaPrincipal)//Inicializar la aplicacion y ya que este listo se muestra la pantalla princippal con la funcion de arrriba.
