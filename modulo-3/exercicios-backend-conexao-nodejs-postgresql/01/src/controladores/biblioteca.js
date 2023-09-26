const pool = require('../conexoes/biblioteca_conexao')

const cadastrarAutor = async (req, res) => {
    const { nome, idade } = req.body

    if (!nome) {
        return res.status(400).json({menssagem: 'O nome é obrigatório, por favor digite o nome!'})
    }

    try {
        const query = `
        insert into autores
        (nome, idade)
        values
        ($1, $2);
        `
        const params = [nome, idade]

        await pool.query(query, params)

        return res.status(201).send()
    } catch (erro) {
        return res.status(500).json({menssagem: erro.message})
    }
}

const buscaAutor = async (req, res) => {
    const { id } = req.params

    try {
        const query = `
        select a.id, a.nome, a.idade, l.id, l.nome as nome_livro, l.genero, l.editora, l.data_publicacao
        from autores a
        left join livros l on a.id = l.autor_id where a.id = $1;
        `
        const params = [id]

        const { rows } = await pool.query(query, params)

        if (rows == '') {
            return res.status(404).json({menssagem: 'Autor não encontrado!'})
        }

        let livros = rows.map((livro) => {
            return {
                nome: livro.nome_livro,
                genero: livro.genero,
                editora: livro.editora,
                data_publicacao: livro.data_publicacao
            }
        })

        if (livros[0].nome == null) {
            livros = []
        }

        return res.json({
            id: rows[0].id,
            nome: rows[0].nome,
            idade: rows[0].idade,
            livros
        })
    } catch (erro) {
        return res.status(500).json({menssagem: erro.message})
    }
}

const cadastrarLivro = async (req, res) => {
    const { id } = req.params
    const { nome, genero, editora, data_publicacao } = req.body

    if (!nome) {
        return res.status(400).json({menssagem: 'O nome é obrigatório, por favor digite o nome!'})
    }

    try {
        const { rows } = await pool.query('select * from autores where id = $1;', [id])

        if (rows == '') {
            return res.status(404).json({menssagem: 'Autor não encontrado, com o id informado nos parametros de rota.'})
        }

        const query = `
            insert into livros
            (nome, genero, editora, data_publicacao, autor_id)
            values
            ($1, $2, $3, $4, $5);
        `
        const params = [nome, genero, editora, data_publicacao, id]

        await pool.query(query, params)

        return res.status(201).send()

    } catch (erro) {
        return res.status(500).json({menssagem: erro.message})
    }
}

const listarLivro = async (req, res) => {
    try {
        const query = `
        select l.id as id_livro, l.nome as nome_livro, l.genero, l.editora, l.data_publicacao, a.id, a.nome, a.idade
        from livros l
        left join autores a on l.autor_id = a.id
        `

        const { rows } = await pool.query(query)

        const livros = rows.map((livro) => {
            return {
                id: livro.id_livro,
                nome: livro.nome_livro,
                genero: livro.genero,
                editora: livro.editora,
                data_publicacao: livro.data_publicacao,
                autor: {
                    id: livro.id,
                    nome: livro.nome,
                    idade: livro.idade
                }
            }
        })

        return res.json(livros)
    } catch (erro) {
        return res.status(500).json({menssagem: erro.message})
    }
}

module.exports = {
    cadastrarAutor,
    buscaAutor,
    cadastrarLivro,
    listarLivro
}