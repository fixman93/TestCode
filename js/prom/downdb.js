const { dbBinding } = require('../weavebridge/dbBinding');
const { weave } = require('../weavebridge/weave');
const { DB_NAME } = require('../constant/dbsym');

let downDB;
let keybase;

async function promInitDownDB() {
  const db = dbBinding(DB_NAME);
  downDB = await weave.openDB(db);

  keybase = await weave.KeyBase.setup(downDB);
}

async function promGetKeyBase() {
  return keybase;
}

async function promGetDownDB() {
  return downDB;
}

module.exports = {
  promGetKeyBase,
  promGetDownDB,
  promInitDownDB,
};
