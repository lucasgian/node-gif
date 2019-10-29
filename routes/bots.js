/** Rotas usando o padrão restful
*
*/
const express = require('express');
const router = express.Router();

const bot_controller = require('@controllers/botController');

/** GET busca todas as gifs publicas salvas */
router.get('/bots', bot_controller.getAll);

/** GET busca uma gif especifica, atraves do seu id (param)
* @param id, recebe o id da gif.
*/
router.get('/bots/:id', bot_controller.get);

/** DELETE delete uma gif especifica, atraves do seu id (param)
* @param id, recebe o id da gif.
*/
router.delete('/bots', bot_controller.destroy);

/** POST compartilha uma nova gif */
router.post('/bots', bot_controller.store);

module.exports = router;
