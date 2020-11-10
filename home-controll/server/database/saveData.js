const Database = require('./db.js');

function saveData(db, data) {
  return db.run(`
    INSERT INTO rooms (
        name,
        ip
    ) VALUES (
        "${data.name}",
        "${data.ip}"
    );
`);
}
module.exports = saveData;
