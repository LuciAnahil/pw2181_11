const {app,BrowserWindow} =  require('electron')
const path = require('path')
const url = require('url')

let pantallaPrincipal;

function muestraPantallaPrincipal(){
	pantallaPrincipal = new BrowserWindow({width:320,height:425});
	pantallaPrincipal.loadURL(url.format({
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file',
			slashes: true
	}))
	//pantallaPrincipal.webContents.openDevTools();
	pantallaPrincipal.show();
}

app.on('ready',muestraPantallaPrincipal)

