'use strict';

const electron = require('electron');
const {app, BrowserWindow} = require('electron');
var path = require('path');
// var url = `file://${__dirname}/index.html`;
var url = path.join(__dirname, 'index.html');
// var url = 'http://192.168.0.125:32400/web/index.html';
var height = 650;
var width = 1000;
var appIcon = path.join(__dirname, 'images', 'strict_logo.ico');
var appName = app.getName();

app.on('ready', () => {
  let win = createMainWindow();
});

app.on('window-all-closed', app.quit);

function createMainWindow() {
  var win = new electron.BrowserWindow({
    title: appName,
    height: height,
    width: width,
    icon: appIcon,
  });

  win.loadURL(url);
  win.webContents.openDevTools();
  return win;
}

exports.openWindow = () =>{
  let win = new BrowserWindow({height: 400, width: 200});
  // win.loadURL(`file://${__dirname}/index.html`);
  win.loadURL(url);
};
