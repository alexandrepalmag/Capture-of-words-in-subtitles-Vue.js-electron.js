const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const dataPrep = require('./dataPrep')
const groupWords = require('./goupwords')

ipcMain.on('treatment-subtitles', (event, paths) => {

    pathsToRows(paths)
        .then(rows => dataPrep(rows))
        .then(words => groupWords(words))
        .then((groupedWords) => {

            event.reply('treatment-subtitles', groupWords)

        })

})