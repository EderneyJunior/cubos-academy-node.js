const knex = require('../conexao');
const multer = require('../utils/multer')
const { uploadFile, deleteFile } = require('./storage');

const listarProdutos = async (req, res) => {
    const { usuario } = req;
    const { categoria } = req.query;

    try {
        const produtos = await knex('produtos')
            .where({ usuario_id: usuario.id })
            .where(query => {
                if (categoria) {
                    return query.where('categoria', 'ilike', `%${categoria}%`);
                }
            });

        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produto = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produto) {
            return res.status(404).json('Produto não encontrado');
        }

        return res.status(200).json(produto);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarProduto = async (req, res) => {
    const { usuario } = req;
    const { nome, estoque, preco, categoria, descricao } = req.body;
    const { file } = req

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!estoque) {
        return res.status(404).json('O campo estoque é obrigatório');
    }

    if (!preco) {
        return res.status(404).json('O campo preco é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo descricao é obrigatório');
    }

    try {
        const novoProduto = await knex('produtos').insert({
            usuario_id: usuario.id,
            nome,
            estoque,
            preco,
            categoria,
            descricao
        }).returning('*');

        if (!novoProduto) {
            return res.status(400).json('O produto não foi cadastrado');
        }

        const imagem = await uploadFile(
            `produtos/${novoProduto[0].id}/${file.originalname}`,
            file.buffer,
            file.mimetype
        )

        await knex('produtos')
            .where({ id: novoProduto[0].id })
            .update({ imagem: imagem.url })

        const produto = await knex('produtos').where({ id: novoProduto[0].id })

        return res.status(200).json(produto);
    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message);
    }
}

const atualizarProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { nome, estoque, preco, categoria, descricao } = req.body;

    if (!nome && !estoque && !preco && !categoria && !descricao) {
        return res.status(404).json('Informe ao menos um campo para atualizaçao do produto');
    }

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        const produto = await knex('produtos')
            .where({ id })
            .update({
                nome,
                estoque,
                preco,
                categoria,
                descricao,
            });

        if (!produto) {
            return res.status(400).json("O produto não foi atualizado");
        }

        return res.status(200).json('produto foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        const produtoExcluido = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).del();

        if (!produtoExcluido) {
            return res.status(400).json("O produto não foi excluido");
        }

        return res.status(200).json('Produto excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirImagemProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { fileName } = req.query

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        await deleteFile(`produtos/${id}/${fileName}`)

        await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).update({ imagem: null })

        return res.status(204).json('Imagem excluida com sucesso')
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const atualizarImagemProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { fileName } = req.query
    const { file} = req

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        await deleteFile(`produtos/${id}/${fileName}`)

        const imagem = await uploadFile(
            `produtos/${id}/${file.originalname}`,
            file.buffer,
            file.mimetype
        )

        const produto = await knex('produtos')
        .where({ id, usuario_id: usuario.id })
        .update({ imagem: imagem.url })

        return res.json('Imagem atualizada com sucesso')
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = {
    listarProdutos,
    obterProduto,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto,
    excluirImagemProduto,
    atualizarImagemProduto
}