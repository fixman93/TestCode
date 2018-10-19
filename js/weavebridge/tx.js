const { bov } = require('./bov');
const { weave } = require('./weave');

function buildSendTx(sender, rcpt, amount, currency, chainID) {
  const tx = weave.buildSendTx(bov.app.Tx, sender, rcpt, amount, currency, chainID);
  const strTx = Buffer.from(tx).toString('base64');
  return strTx;
}

module.exports = {
  buildSendTx,
};
