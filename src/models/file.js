// importa os dados do banco de coneção
const db = require('@environment/dev');
const fs = require('fs');

/** Consulta no banco de dados se gif existe pelo menos uma gif.
*  @return uma array de objetos do tipo file gif.
 */
const select = () => {

    const knex = require('knex')({
        client: 'mysql',
        connection: db
    });

    return knex.select('*').from('gif_file').then((result) => {

        return result;

    }).catch((err) => {

        return err.error;

    }).finally(() => {

        knex.destroy();

    });

}


/** Consulta no banco de dados se gif existe, caso ela exista ele retorna um objeto gif.
*  @param gif, recebe um gif.id, que é id da noticia em questão.
*  @return uma objeto do tipo file gif.
 */
const selectWhere = gif => {

    const knex = require('knex')({
        client: 'mysql',
        connection: db
    });

    let value = gif.id;
    let search = 'gif_file.id';

    if (gif.key) {
      let value = gif.key;
      let search = 'gif_file.key';
    }
    
    return knex.select().from('gif_file').where(search, '=', value).then((result) =>{

        return result;

    }).catch((err) => {

        return err.error;

    }).finally(() => {

        knex.destroy();

    });

}

/** Insere no banco de dados uma gif.
*  @param gif, recebe um objeto gif.
*  @return res, mesagem de sucesso ou falha.
 */
const insert = async gif => {

    //Convertendo arquivo em binário
    let bitmap = fs.readFileSync('qzwGKOzUjcCq.gif');
    let fileBT = new Buffer (bitmap).toString('base64');

    const knex = require('knex')({
        client: 'mysql',
        connection: db
    });

    //Gera link de acesso
    const md5 = require('md5');
    const file_link = md5(gif.name + knex.fn.now());

    return knex('gif_file').insert([
        {
          file_name: gif.name,
          file_tag: gif.tag,
          file_link: file_link,
          file_original_still: fileBT,
          file_visibility: gif.visibility,
          file_key: gif.key,
          dateLimit: gif.dateLimit,
          createdAt: knex.fn.now()
        }
    ]).then((result) => {

        return result;

    }).catch((err) => {

        return err.error;

    }).finally(() => {

        knex.destroy();

    });

}

/** Deleta do banco de dados uma gif.
*  @param gif, recebe um objeto gif.
*  @return res, mesagem de sucesso ou falha.
 */
const remove = gif => {

    const knex = require('knex')({
        client: 'mysql',
        connection: db
    });

    return knex('gif_file').where('id', gif.id).del().then((result) => {

        return result;

    }).catch((err) => {

        return err.error;

    }).finally(() => {

        knex.destroy();

    });

}

module.exports = { selectWhere, select, insert, remove };
