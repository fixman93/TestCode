const { weave } = require('./weave');
const bovJSON = require('./bov.json');

const bov = weave.loadJSON(bovJSON);

module.exports = { bov };
