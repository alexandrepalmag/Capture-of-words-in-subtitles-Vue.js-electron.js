module.exports = words => {
    return new Promise((resolve, reject) => {
        try {

            const groupeWords = words.reduce((obj, word) => {
                if (obj[word]) {
                    obj[word] = obj[word] + 1
                } else {
                    obj[word] = 1
                }
                return obj
            }, {})

            const groupWordArr = Object
            .keys(groupeWords)
            .map(key => ({name: key, amount:groupeWords[key]}))
            .sort((w1, w2) => w2.amount - w1.amount)

            resolve(rows)
        } catch (e) {
            reject(e)
        }
    })
}
