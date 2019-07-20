/** Rotas usando o padrão restful
*
*/
const express = require('express');
const router = express.Router();

const file_controller = require('@controllers/fileController');

/** GET busca todas as gifs publicas salvas */
router.get('/gifs', file_controller.getAll);

/** GET busca uma gif especifica, atraves do seu id (param)
* @param id, recebe o id da gif.
*/
router.get('/gifs/:id', file_controller.get);

/** GET busca uma gif privada especifica, atraves da sua chave (param)
* @param id, recebe o id da gif.
*/
router.get('/gifs/private/:key', file_controller.toValidAccess);

/** GET busca uma gif especifica
* @param link, recebe o link da gif.
*/
router.get('/gifs/search/:link', file_controller.toLinkAccess);


/** DELETE delete uma gif especifica, atraves do seu id (param)
* @param id, recebe o id da gif.
*/
router.delete('/gifs/:id', file_controller.destroy);

/** POST compartilha uma nova gif */
router.post('/gifs', file_controller.store);

/** POST cria uma gif, convertendo vídeo em gif */
router.post('/create/gifs', file_controller.toGif);


//router.get('/teste', file_controller.store);
module.exports = router;
