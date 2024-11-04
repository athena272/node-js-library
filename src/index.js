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

        breakParagraphs(text)
    } catch (error) {
        errorHandler(error, text)
    }

})

// const filesPath = process.argv // arguments vector
