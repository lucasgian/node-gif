const file_controller = require('@controllers/fileController');

test(`[filesController][getAll] Teste, se resultado é diferente null`, () => {

    const data = file_controller.getAll();
    expect(data).toBeDefined();

});


test(`[filesController][get] Teste, se resultado é diferente null`, () => {

    const data = file_controller.get( { id: 1 } );
    expect(data).toBeDefined();

});


test(`[filesController][toValidAccess] Teste, se tem acesso a gif privada`, () => {

    const data = file_controller.toValidAccess( { key: 1 } );
    expect(data).toBeDefined();

});
