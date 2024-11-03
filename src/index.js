const fs = require('fs') // file system
const path = require('path');
const utils = require('./utils')

const filesPathVector = [
    path.join(__dirname, '../files/texto-aprendizado.txt'),
    path.join(__dirname, '../files/texto-kanban.txt'),
    path.join(__dirname, '../files/texto-web.txt'),
];
const link = filesPathVector[2]

fs.readFile(link, 'utf-8', (error, text) => {
    if (error) {
        console.error("Erro ao ler o arquivo:", error);
        return;
    }

    utils.breakParagraphs(text)
})

// const filesPath = process.argv // arguments vector
// console.log("🚀 ~ filesPath:", filesPath)
