const fs = require('fs') // file system
const path = require('path');
const { breakParagraphs } = require('./utils');
const { errorHandler } = require('./erros');

const filesPathVector = [
    path.join(__dirname, '../files/texto-aprendizado.txt'),
    path.join(__dirname, '../files/texto-kanban.txt'),
    path.join(__dirname, '../files/texto-web.txt'),
    path.join(__dirname, '../files/empty.txt'),
];
const link = filesPathVector[2]

fs.readFile(link, 'utf-8', (error, text) => {
    try {
        if (error || !text) throw error

        const result = breakParagraphs(text)
        createSaveFile(path.join(__dirname, '../files', result))
    } catch (error) {
        errorHandler(error, text)
    }

})

async function createSaveFile(wordsList, pathToSave) {
    const newFile = `${pathToSave}/output.txt`
    const wordsText = JSON.stringify(wordsList)
    try {
        await fs.promises.writeFile(newFile, wordsText)
        console.log('File create')
    } catch (error) {
        throw error
    }
}

// const filesPath = process.argv // arguments vector
