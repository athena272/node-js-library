function errorHandler(erro, text) {
    if (!text) {
        throw new Error("Não há nada para ser lido")
    }
    else if (erro.code === 'ENOENT') {
        throw new Error('Arquivo não encontrado');
    } else {
        return 'Erro na aplicação';
    }
}

module.exports = {
    errorHandler
}