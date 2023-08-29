let bancodedados = require('../bancodedados')
let idAluno = 2

const listagemAlunos = (req, res) => {
    return res.status(200).json(bancodedados)
}

const obterAluno = (req, res) => {
    const { id } = req.params

    if (id < 0) {
        return res.status(400).json({menssagem: 'O ID deve ser um número válido'})
    }

    const aluno = bancodedados.find((aluno) => {
        return aluno.id == id
    })

    if (!aluno) {
        return res.status(404).json({menssagem: 'O aluno não foi encontrado'})
    }

    return res.status(200).json(aluno)
}

const criarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({menssagem: 'Para cadastrar um aluno, deve conter todas as propriedades: nome, sobrenome, idade e curso'})
    }

    if (nome.trim() === '' || sobrenome.trim() === '' || curso.trim() === '') {
        return res.status(400).json({menssagem: 'Nome, Sobrenome ou curso estão vazios, preencha estes campos'})
    }

    if (Number(idade) < 18) {
        return res.status(400).json({menssagem: 'Aluno menor de idade'})
    }

    const aluno = {
        id: idAluno++,
        nome,
        sobrenome,
        idade: Number(idade),
        curso
    }

    bancodedados.push(aluno)

    return res.status(201).send()
}

const excluirAluno = (req, res) => {
    const { id } = req.params

    if (id < 0) {
        return res.status(400).json({menssagem: 'O ID deve ser um número válido'})
    }

    const aluno = bancodedados.find((aluno) => {
        return aluno.id == id
    })

    if (!aluno) {
        return res.status(404).json({menssagem: 'O aluno a ser exluido não foi encontrado'})
    }

    bancodedados = bancodedados.filter((aluno) => {
        return aluno.id != id
    })

    return res.status(200).json(aluno)
}

module.exports = {
    listagemAlunos,
    obterAluno,
    criarAluno,
    excluirAluno
}