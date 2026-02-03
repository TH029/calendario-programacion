const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 420,
    height: 560,
    resizable: true,
    autoHideMenuBar: true
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

