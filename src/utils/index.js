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

function breakParagraphs(text) {
    const paragraphs = text.toLowerCase().split('\n')
    const cont = paragraphs
    .filter((paragraph) => paragraph)
    .map((paragraph) => checkDuplicateWords(paragraph))
    console.log("🚀 ~ breakParagraphs ~ paragraphs:", cont)
}

module.exports = {
    breakParagraphs
}