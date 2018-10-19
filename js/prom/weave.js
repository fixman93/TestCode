const { bov } = require('../weavebridge/bov');
const { weave } = require('../weavebridge/weave');

async function promConnectWeaveClient(uri) {
  const client = new weave.Client(uri);
  await client.height(); // ensure connection worked due to lazy eval
  return client;
}

module.exports = { promConnectWeaveClient };
