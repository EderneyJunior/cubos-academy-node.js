const nomeArquivo = 'Foto da Familia.png';

function arquivo(nomeArquivo) {
    if (nomeArquivo.includes('jpg') || nomeArquivo.includes('jpeg') ||  nomeArquivo.includes('gif') || nomeArquivo.includes('png')) {
        return 'Arquivo válido'
    } else {
        return 'Arquivo inválido'
    }
}

console.log(arquivo(nomeArquivo))