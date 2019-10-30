/** Rotas usando o padrão restful
*
*/
const express = require('express');
const router = express.Router();

const bot_controller = require('@controllers/botController');

/** GET busca todas as gifs publicas salvas */
router.get('/phrases', bot_controller.getAll);

/** GET busca todas as gifs publicas salvas */
router.get('/phrases/feeds', bot_controller.random);

/** DELETE delete uma gif especifica, atraves do seu id (param)
* @param id, recebe o id da gif.
*/
router.delete('/phrases/:id', bot_controller.destroy);

/** POST compartilha uma nova gif */
router.post('/phrases', bot_controller.store);

module.exports = router;
