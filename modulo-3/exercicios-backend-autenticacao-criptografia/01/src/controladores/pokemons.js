const pool = require('../conexao')

const cadastrarPokemon = async (req, res) => {
    const { nome, apelido, habilidades, imagem} = req.body

    if (!nome) {
        return res.status(400).json({mensagem: 'O nome é obrigatótio'})
    }

    
    if (!habilidades) {
        return res.status(400).json({mensagem: 'As abilidades são obrigatórias'})
    }

    try {
        const { id } = req.usuario

        const novoPokemon = await pool.query(`insert into pokemons 
        (nome, usuario_id, apelido, habilidades, imagem)
        values
        ($1, $2, $3, $4, $5) returning *
        `, [nome, id, apelido, habilidades, imagem])

        return res.status(201).json(novoPokemon.rows[0])
    } catch (erro) {
        return res.status(500).json({mensagem: erro.message})
    }
}

module.exports = {
    cadastrarPokemon
}