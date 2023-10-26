const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        password: process.env.BD_PASS,
        database: process.env.BD_NAME
    }
});

module.exports = knex;