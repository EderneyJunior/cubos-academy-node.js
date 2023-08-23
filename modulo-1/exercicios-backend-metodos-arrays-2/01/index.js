const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia']
const nomeDoLivro = "A Divina Comédia"

function localizar(nome, livros) {
    const resultado = livros.findIndex((el) => {
        return el == nome
    })
    if (resultado == -1) {
        console.log(`O livro não está nesta biblioteca!`)
    } else {
        console.log(`O livro está na posição ${resultado + 1}`)
    }
}

localizar(nomeDoLivro, livros)