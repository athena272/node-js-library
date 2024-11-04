const fs = require('fs') // file system
const path = require('path');
const utils = require('./utils')

const filesPathVector = [
    path.join(__dirname, '../files/texto-aprendizado.txt'),
    path.join(__dirname, '../files/texto-kanban.txt'),
    path.join(__dirname, '../files/texto-web.txt'),
    path.join(__dirname, '../files/empty.txt'),
];
const link = filesPathVector[3]

fs.readFile(link, 'utf-8', (error, text) => {
    try {
        if (!text) throw new Error("Não há nada para ser lido")
        if (error) throw new Error

        utils.breakParagraphs(text)
    } catch (error) {
        console.error("Erro ao ler o arquivo:", error.message);
    }

})

// const filesPath = process.argv // arguments vector
// console.log("🚀 ~ filesPath:", filesPath)
