const Database = require('sqlite-async');

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS rooms (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            ip TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute) //db