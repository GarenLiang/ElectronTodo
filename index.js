const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    //width: 1000,
    //frame: false;

  });
  mainWindow.loadURL(`file://${__dirname}/main.html`);
});
