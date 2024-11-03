const fs = require('fs') // file system
const path = require('path');

const filesPathVector = [
    path.join(__dirname, '../files/texto-aprendizado.txt'),
    path.join(__dirname, '../files/texto-kanban.txt'),
    path.join(__dirname, '../files/texto-web.txt'),
];
const link = filesPathVector[2]

function checkDuplicateWords(text) {
    const wordsList = text.split(' ')
    const result = {}
    // object[property] = value
    wordsList.forEach(word => {
        result[word] = (result[word] || 0) + 1
    });

    return result
}

function breakParagraphs(text) {
    const paragraphs =  text.toLowerCase().split('\n')
    const cont = paragraphs.map((paragraph) => checkDuplicateWords(paragraph))
    console.log("🚀 ~ breakParagraphs ~ paragraphs:", cont)
}

fs.readFile(link, 'utf-8', (error, text) => {
    breakParagraphs(text)
})



// const filesPath = process.argv // arguments vector
// console.log("🚀 ~ filesPath:", filesPath)
