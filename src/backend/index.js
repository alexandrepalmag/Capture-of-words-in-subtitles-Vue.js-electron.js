const { ipcMain } = require('electron')

ipcMain.on('treatment-subtitles', (event, paths) => {
    console.log(paths)
    
    event.reply('treatment-subtitles', [
        { name: "Holliday", amount: 800 },
        { name: "Hi", amount: 500 },
        { name: "Helopslo", amount: 402 },
        { name: "Hikis", amount: 802 },
        { name: "Hello", amount: 128 },
    ])
})