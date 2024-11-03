function clearWords(word) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

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

module.exports = {
    breakParagraphs
}