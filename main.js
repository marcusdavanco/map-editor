const { app, BrowserWindow } = require('electron');

function createWindow(){
    win = new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true,
            
        }
    })
    win.loadFile('index.html');
    win.maximize();
    win.show();

    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (win === null){
        createWindow()
    }
})
