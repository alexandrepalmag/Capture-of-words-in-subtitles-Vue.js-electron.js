module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            const theWords = rows.filter(filterRowsValid)
            .map(removeAllPunctuation)
            .map(removeAllTags)
            .reduce(mergeRows)
            .split('')
            .map(word => word.toLowerCase())
            .map(word => word.replace('"', ''))
            resolve(rows)
        } catch (e) {
            reject(e)
        }
    })
}

function filterRowsValid() {
    const notNumber = !parseInt(row.trim())
    const noEmpty = !!row.trim()
    const noInterval = !row.includes('-->')
    return notNumber && noEmpty && noInterval
}

const removeAllPunctuation = row => row.replace(/[,?!.-]/g, '')
const removeAllTags = row => row.replace(/(<[^>]+)>/ig,'').trim()
const mergeRows = (fullText, row) => `${fullText} ${rows}`