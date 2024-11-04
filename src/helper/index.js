function filterOccurrences(paragraph) {
    return Object.keys(paragraph).filter(key => paragraph[key] > 1)
}

function creatOutputFile(wordsList) {
    let finalText = ''
    wordsList.forEach((paragraph, index) => {
        const duplicated = filterOccurrences(paragraph).join(', ')
        if (duplicated) { // Apenas adiciona ao finalText se houver palavras duplicadas
            finalText += `palavras duplicadas no paragrafo ${index + 1}: ${duplicated}\n`
        }
    });

    return finalText
}

module.exports = {
    creatOutputFile
}