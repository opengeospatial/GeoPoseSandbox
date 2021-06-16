// Electron JS file.
// Provides the testing environment

const { app, BrowserWindow } = require('electron');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
function createWindow () {
	const win = new BrowserWindow({ width: 800, height: 600,
		show: false, // Start hidden
		fullScreen: true,
		darkTheme: true,
		autoHideMenuBar: true,
		// fullscreen:true,

		webPreferences: {
			devTools:true,
			nodeIntegration: false
		}
	});

	win.loadFile('../../tests/index.html');
	win.webContents.openDevTools();
	win.once('ready-to-show', () => { win.maximize();win.show(); });
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => { app.quit() });

app.on('activate', () => { 
	if (BrowserWindow.getAllWindows().length === 0) {	createWindow();}});