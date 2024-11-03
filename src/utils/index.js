function clearWords(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function checkDuplicateWords(text) {
    const wordsList = text.split(' ')
    const result = {}
    // object[property] = value
    wordsList.forEach(word => {
        if (word.length >= 3) {
            const cleanWord = clearWords(word)
            result[cleanWord] = (result[cleanWord] || 0) + 1
        }
    });

    return result
}

function extractParagraphs(text) {
    return text.toLowerCase().split('\n')
}

function wordsCounter(text) {
    const paragraphs = extractParagraphs(text)
    const count = paragraphs
        .flatMap(paragraph => {
            if (!paragraph) return []

            return checkDuplicateWords(paragraph)
        })
    console.log("🚀 ~ breakParagraphs ~ paragraphs:", count)
}

function breakParagraphs(text) {
    wordsCounter(text)
}

module.exports = {
    breakParagraphs
}