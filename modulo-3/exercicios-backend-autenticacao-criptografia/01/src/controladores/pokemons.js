const pool = require('../conexao')

const cadastrarPokemon = async (req, res) => {
    const { nome, apelido, habilidades, imagem} = req.body

    if (!nome) {
        return res.status(400).json({mensagem: 'O nome é obrigatótio'})
    }

    
    if (!habilidades) {
        return res.status(400).json({mensagem: 'As abilidades são obrigatórias'})
    }

    let habilidadesFormatada = habilidades.split(',')
    habilidadesFormatada = habilidadesFormatada.map((habilidade) => {
        return habilidade.trim()
    })

    try {
        const { id } = req.usuario

        const novoPokemon = await pool.query(`insert into pokemons 
        (nome, usuario_id, apelido, habilidades, imagem)
        values
        ($1, $2, $3, $4, $5) returning *
        `, [nome, id, apelido, habilidadesFormatada, imagem])

        return res.status(201).json(novoPokemon.rows[0])
    } catch (erro) {
        return res.status(500).json({mensagem: erro.message})
    }
}

const atualizarApelido = async (req, res) => {
    const { apelido } = req.body
    const { id } = req.params

    if (!apelido) {
        return res.status(400).json({mensagem: 'Informar o apelido é obrigatório'})
    }

    if (isNaN(id)) {
        return res.status(400).json({mensagem: 'O id não é um numero válido'})
    }

    try {
        const novoApelido = await pool.query('update pokemons set apelido = $1 where id = $2 returning *', [apelido, id])

        if (novoApelido.rowCount < 1) {
            return res.status(404).json({mensagem: 'Pokemon não encontrado'})
        }

        return res.status(200).json(novoApelido.rows[0])
    } catch (erro) {
        return res.status(500).json({mensagem: erro.message})
    }
}

const listarPokemons = async (req, res) => {
    try {
        const pokemons = await pool.query('select * from pokemons')

        return res.json(pokemons.rows)
    } catch (erro) {
        return res.status(500).json({mensagem: erro.message})
    }
}

const detalharPokemon = async (req, res) => {
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({mensagem: 'O id não é um numero válido'})
    }

    try {
        const pokemon = await pool.query('select * from pokemons where id = $1', [id])

        if (pokemon.rowCount < 1) {
            return res.status(404).json({mensagem: 'Pokemon não encontrado'})
        }

        return res.json(pokemon.rows[0])
    } catch (erro)  {
        return res.status(500).json({mensagem: erro.message})
    }
}

const deletarPokemon = async (req, res) => {
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({mensagem: 'O id não é um numero válido'})
    }

    try {
        const { rowCount } = await pool.query('select * from pokemons where id = $1', [id])

        if (rowCount < 1) {
            return res.status(404).json({mensagem: 'Pokemon não encontrado'})
        }

        const pokemonDeletado = await pool.query('delete from pokemons where id = $1 returning *', [id])

        return res.json(pokemonDeletado.rows[0])
    } catch (erro) {
        return res.status(500).json({mensagem: erro.message})
    }
}

module.exports = {
    cadastrarPokemon,
    atualizarApelido,
    listarPokemons,
    detalharPokemon,
    deletarPokemon
}