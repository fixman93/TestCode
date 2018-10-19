const { bov } = require('./bov');
const { weave } = require('./weave');

class Client {
  constructor(uri) {
  // TODO: need reconnect
    this.client = new weave.Client(uri);
  }

  async init() {
    await this.client.height();
  }

  // TODO: need unit test
  async searchSendTx(addr) {
    return this.client.searchParse('wllt', addr, bov.app.Tx);
  }
}

module.exports = { Client };
