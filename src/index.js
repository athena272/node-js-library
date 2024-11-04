const fs = require('fs') // file system
const path = require('path');
const { breakParagraphs } = require('./utils');
const { errorHandler } = require('./erros');
const { creatOutputFile } = require('./helper');

const filesPathVector = [
    path.join(__dirname, '../files/texto-aprendizado.txt'),
    path.join(__dirname, '../files/texto-kanban.txt'),
    path.join(__dirname, '../files/texto-web.txt'),
    // path.join(__dirname, '../files/empty.txt'),
];
// const link = filesPathVector[2]

function myReadFile(link) {
    fs.readFile(link, 'utf-8', (error, text) => {
        try {
            if (error || !text) throw error

            const outputFileName = `output_${path.basename(link)}`;
            const result = breakParagraphs(text)
            createSaveFile({
                wordsList: result,
                pathToSave: path.join(__dirname, '../output'),
                fileName: outputFileName,
            })
        } catch (error) {
            errorHandler(error, text)
        }

    })
}

async function createSaveFile({ wordsList, pathToSave, fileName }) {
    const newFile = path.join(pathToSave, fileName);
    const wordsText = creatOutputFile(wordsList)
    try {
        await fs.promises.writeFile(newFile, wordsText)
        console.log('File created successfully!')
    } catch (error) {
        console.log("🚀 ~ createSaveFile ~ error:", error)
        throw error
    }
}

async function createMultiplesFiles() {
    try {
        const promisesArray = filesPathVector.map(path => myReadFile(path))
        const data = await Promise.all(promisesArray)
        return data

    } catch (error) {
        throw error;
    }
}

createMultiplesFiles()

// const filesPath = process.argv // arguments vector
