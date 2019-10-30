const bot = require('@models/bot');

/** Retorna todas bot compartilhadas (públicas).
 *  @return res, array de objetos do tipo bot.
 */
const getAll = async(req, res) => {

  bot.select().then( result => {
    res.send(result);
  });

}

/** Retorna todas bot compartilhadas (públicas).
 *  @return res, array de objetos do tipo bot.
 */
const random = async(req, res) => {

  bot.selectRandom().then( result => {
    res.send(result);
  });

}

/** Delete uma bot compartilhada.
 *  @param req, recebe um identificador, que é id da bot em questão.
 *  @return res, mesagem de sucesso ou falha.
 */
const destroy = async(req, res) => {

  bot.remove( { id: req.params.id } ).then( result => {
    res.send( { message: 'removed' } );
  });

}

/** Compartilha uma bot.
 *  @param req, recebe um objeto do tipo bot.
 *  @return res, mesagem de sucesso ou falha.
 */
const store = async(req, res) => {

  bot.insert({
      content: req.body.content
  }).then( result => {
    res.send(result);
  });

}

module.exports = { getAll, destroy, store, random };
