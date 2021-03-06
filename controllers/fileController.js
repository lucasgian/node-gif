const gif = require('@models/file');

/** Retorna uma gif solicitada.
 *  @param req, recebe um identificador, que é id da gif em questão.
 *  @return res, objeto do tipo gif.
 */
const get = async(req, res) => {

  gif.selectWhere( { id: req.params.id } ).then( result => {
    res.send(result);
  });

}

/** Retorna todas gif compartilhadas (públicas).
 *  @return res, array de objetos do tipo gif.
 */
const getAll = async(req, res) => {

  gif.select().then( result => {
    res.send(result);
  });

}

/** Retorna uma gif solicitada.
 *  @param req, recebe um identificador, que é link da gif em questão.
 *  @return res, objeto do tipo gif.
 */
const toLinkAccess = async(req, res) => {

  const today = new Date();

  gif.selectDirect( { link: req.params.link } ).then( result => {

    if ( !result[0] ) {
      res.send();
    }
    else if ( today > result[0].dateLimit ) {
        destroy( { id: result[0].id }, res );
    } else {
      res.send(result[0]);
    }

    //res.send(result);

  });

}


/** Retorna a gif privada solicitada, coso a chave seja valida.
 *  @param req, recebe um chave, que é key da gif em questão.
 *  @return res, objeto do tipo gif.
 */
const toValidAccess = async(req, res) => {

  gif.selectWhere( { key: req.params.key } ).then( result => {
    res.send(result);
  });

}

/** Delete uma gif compartilhada.
 *  @param req, recebe um identificador, que é id da gif em questão.
 *  @return res, mesagem de sucesso ou falha.
 */
const destroy = async(req, res) => {

  gif.remove( { id: req.id } ).then( result => {
    res.send( { message: 'removed' } );
  });

}

/** Compartilha uma gif.
 *  @param req, recebe um objeto do tipo gif.
 *  @return res, mesagem de sucesso ou falha.
 */
const store = async(req, res) => {

  gif.insert({
      file: req.body.file,
      key: req.body.key,
      visibility: req.body.visibility,
      dateLimit: req.body.dateLimit
  }).then( result => {
    res.send(result);
  });

}

/** Cria uma gif, apartir de um video.
 *  @param req, recebe um objeto do tipo gif.
 *  @return res, mesagem de sucesso ou falha.
 */
const toGif = async(req, res) => {

  store(req, res);

}


module.exports = { get, getAll, toValidAccess, destroy, store, toLinkAccess, toGif };
