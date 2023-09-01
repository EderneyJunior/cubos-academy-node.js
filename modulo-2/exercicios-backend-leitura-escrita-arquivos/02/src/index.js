const express = require('express')

const { listarPokemons, detalharPokemon } = require('utils-playground')

const app = express()

app.use(express.json())

app.get('/pokemon', async (req, res) => {
    let { pagina } = req.query

    if (!pagina) {
        pagina = 1
    }

    try {
        const pokemon = await listarPokemons(Number(pagina))

        return res.status(200).json(pokemon)
    } catch (erro) {
        return res.status(400).json({messagem: `Deu erro: ${erro.message}`})
    }
})

app.get('/pokemon/:param', async (req, res) => {
    let { param } = req.params

    if (!isNaN(Number(param))) {
        param = Number(param)
    }

    try{
        const { id, name, height, weight, base_experience, forms, abilities, species } = await detalharPokemon(param)

        const pokemon = {
            id,
            name,
            height,
            weight,
            base_experience,
            forms,
            abilities,
            species
        }

        return res.status(200).json(pokemon)
    } catch (erro) {
        return res.status(404).json({menssagem: `Deu erro: ${erro.message}`})
    }
})


app.listen(3000, () => console.log('Servidor Rodando'))