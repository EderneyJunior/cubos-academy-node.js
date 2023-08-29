let livros = require('../bancodedados')
let idLivro = 3

const listarLivros = (req, res) => {
    return res.status(200).json(livros)
}

const obterLivro = (req, res) => {
    const { id } = req.params

    if (id < 1) {
        return res.status(400).json({menssagem: 'O valor do parâmetro ID da URL não é um número válido.'})
    }

    const livro = livros.find((livro) => {
        return livro.id == id
    })

    if (!livro) {
        return res.status(404).json({menssagem: 'Não existe livro para o ID informado.'})
    }

    return res.status(200).json(livro)
}

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({menssagem: 'Está faltando alguma(s) das propriedades: titulo, autor, ano ou páginas, digide todas para adicionar um livro ao banco de dados.'})
    }

    const livro = {
        id: idLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livro)

    return res.status(201).json({menssagem: 'Livro adcicionado.'})
}

const substituirLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({menssagem: 'Está faltando alguma(s) das propriedades: titulo, autor, ano ou páginas, digide todas para substituir um livro ao banco de dados.'})
    }

    const livro = livros.find((livro) => {
        return livro.id == id
    })

    if (!livro) {
        return res.status(404).json({menssagem: 'Não existe livro a ser substituído para o ID informado.'})
    }

    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano
    livro.numPaginas = numPaginas

    return res.status(200).json({menssagem: 'Livro substituído.'})
}

const alterarParteDoLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    const livro = livros.find((livro) => {
        return livro.id == id
    })

    if (!livro) {
        return res.status(404).json({menssagem: 'Não existe livro a ser alterado para o ID informado.'})
    }

    if (titulo || autor || ano || numPaginas) {
        if (titulo) {
            livro.titulo = titulo
        }

        if (autor) {
            livro.autor = autor
        }

        if (ano) {
            livro.ano = ano
        }

        if (numPaginas) {
            livro.numPaginas = numPaginas
        }

        res.status(200).json({menssagem: 'Livro alterado.'})
    }
}

const excluirLivro = (req, res) => {
    const { id } = req.params

    const livro = livros.find((livro) => {
        return livro.id == id
    })

    if (!livro) {
        return res.status(404).json({menssagem: 'Não existe livro a ser removido para o ID informado.'})
    }

    livros = livros.filter((livro) => {
        return livro.id != id
    })

    return res.status(200).json({menssagem: 'Livro removido.'})
}

module.exports = {
    listarLivros,
    obterLivro,
    adicionarLivro,
    substituirLivro,
    alterarParteDoLivro,
    excluirLivro
}