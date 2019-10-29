// importa os dados do banco de coneção
const db = require('@environment/dev');
const fs = require('fs');

/** Consulta no banco de dados se bot existe pelo menos uma bot.
*  @return uma array de objetos do tipo file bot.
 */
const select = () => {

    const knex = require('knex')({
        client: 'mysql',
        connection: db
    });

    return knex.select('*').from('bot').then((result) => {

        return result;

    }).catch((err) => {

        return err.error;

    }).finally(() => {

        knex.destroy();

    });

}

/** Insere no banco de dados uma bot.
*  @param bot, recebe um objeto bot.
*  @return res, mesagem de sucesso ou falha.
 */
const insert = async bot => {
  const { content } = bot;
  const knex = require('knex')({
      client: 'mysql',
      connection: db
  });

  return knex('bot').insert([{
    content,
    createdAt: knex.fn.now()
  }]).then((result) => {

    return { link: file_link };

  }).catch((err) => {

    return err;

  }).finally(() => {

    knex.destroy();

  });
}

/** Deleta do banco de dados uma bot.
*  @param bot, recebe um objeto bot.
*  @return res, mesagem de sucesso ou falha.
 */
const remove = bot => {

    const knex = require('knex')({
        client: 'mysql',
        connection: db
    });

    return knex('bot').where('id', bot.id).del().then((result) => {

        return result;

    }).catch((err) => {

        return err.error;

    }).finally(() => {

        knex.destroy();

    });

}

module.exports = { select, insert, remove };
