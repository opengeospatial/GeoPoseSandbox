// ----------------------------------------------------------------------------
// Electron Script to launch the viewer without a server
// Should be executed with the "electron" command
// See: https://www.electronjs.org/docs/latest/tutorial/quick-start
// (To install Electron globally with NPM use: "npm install -g electron")
// ----------------------------------------------------------------------------

// ----------------------------------------------------------- GLOBAL VARIABLES
const { app, BrowserWindow } = require('electron');

// FIX: To make electron not show a warning every single time
// See https://www.electronjs.org/docs/latest/tutorial/security 
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

// ---------------------------------------------------ELECTRON APP

/** Called when electron is ready */
app.whenReady().then(() => {

	const win = new BrowserWindow({
		show: false, 				// Start hidden
		// fullscreen: true,	
		maximizable: true,
		darktheme: true,
		autoHideMenuBar: true,
		webPreferences: {
			devTools:true,
			nodeIntegration: false
		}

	})
	win.loadFile('../../tests/index.html');
	win.webContents.openDevTools();
	win.once('ready-to-show', () => { win.maximize(); win.show(); });
});

/** Terminate the process when the window is closed. */
app.on('window-all-closed', () => { app.quit() });

