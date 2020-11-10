const Database = require('./db.js');
const saveData = require('./saveData');

Database.then(async db => {
    // inserir na tabela 
     /*await saveData(db, {
        name: "BANHEIRO",
        ip: "192.168.0.35"
     })*/
    //consultar dados na tabela
    const dbColector = await db.all("SELECT * FROM rooms")
    console.log(dbColector)

    //consultar somente 1 representante
    //const representante = await db.all('SELECT * FROM representantes WHERE id = "3"')
    //console.log(representante)

    //deletar dados da tabelas
    //await db.run('DELETE FROM representantes)
    // await db.run('DELETE FROM representantes WHERE id = "3"')

}) 