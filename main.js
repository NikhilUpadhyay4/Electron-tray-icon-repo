const {app, BrowserWindow, Tray,Menu} = require('electron');

function createWindo(){
  const win = new BrowserWindow({
    width:900,
    height:600
  })
  win.loadFile('index.html')
  let tray = new Tray('kloudspot.png') 
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
}

app.whenReady().then(createWindo)